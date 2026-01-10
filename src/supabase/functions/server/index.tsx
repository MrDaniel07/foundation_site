import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-b2211b85/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-b2211b85/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, subject, message } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return c.json({ error: "All fields are required" }, 400);
    }

    // Store the contact message in KV store
    const timestamp = new Date().toISOString();
    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    await kv.set(contactId, {
      id: contactId,
      name,
      email,
      subject,
      message,
      timestamp,
      status: 'new'
    });

    // Get Resend API key from environment variable
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    console.log("RESEND_API_KEY exists:", !!resendApiKey);
    console.log("RESEND_API_KEY length:", resendApiKey?.length || 0);
    console.log("RESEND_API_KEY starts with 're_':", resendApiKey?.startsWith('re_'));
    
    if (resendApiKey) {
      // Send email using Resend
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Prince Goodwill Foundation <onboarding@resend.dev>",
            to: ["danielanyahuru20@gmail.com"],
            subject: `New Contact Form: ${subject}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>From:</strong> ${name} (${email})</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
              <hr>
              <p><small>Submitted at: ${new Date(timestamp).toLocaleString()}</small></p>
            `,
          }),
        });

        const responseText = await emailResponse.text();
        console.log("Resend API response status:", emailResponse.status);
        console.log("Resend API response:", responseText);

        if (!emailResponse.ok) {
          console.error("Resend email error:", responseText);
          // Don't throw error - still return success to user since message is stored
        } else {
          console.log("Email sent successfully!");
        }
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        // Don't throw error - still return success to user since message is stored
      }
    } else {
      console.log("RESEND_API_KEY not configured - email not sent");
    }

    return c.json({ 
      success: true, 
      message: "Thank you for your message. We will get back to you soon!",
      contactId 
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return c.json({ error: "Failed to submit contact form" }, 500);
  }
});

// Gallery endpoints
app.get("/make-server-b2211b85/gallery", async (c) => {
  try {
    const gallery = await kv.get("gallery");
    return c.json({ gallery: gallery || [] });
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return c.json({ error: "Failed to fetch gallery" }, 500);
  }
});

app.post("/make-server-b2211b85/gallery", async (c) => {
  try {
    const body = await c.req.json();
    const { gallery } = body;
    
    await kv.set("gallery", gallery);
    
    return c.json({ success: true, gallery });
  } catch (error) {
    console.error("Error updating gallery:", error);
    return c.json({ error: "Failed to update gallery" }, 500);
  }
});

// Programs endpoints
app.get("/make-server-b2211b85/programs", async (c) => {
  try {
    const programs = await kv.get("programs");
    return c.json({ programs: programs || [] });
  } catch (error) {
    console.error("Error fetching programs:", error);
    return c.json({ error: "Failed to fetch programs" }, 500);
  }
});

app.post("/make-server-b2211b85/programs", async (c) => {
  try {
    const body = await c.req.json();
    const { programs } = body;
    
    await kv.set("programs", programs);
    
    return c.json({ success: true, programs });
  } catch (error) {
    console.error("Error updating programs:", error);
    return c.json({ error: "Failed to update programs" }, 500);
  }
});

// Impact stories endpoints
app.get("/make-server-b2211b85/impact-stories", async (c) => {
  try {
    const stories = await kv.get("impact_stories");
    return c.json({ stories: stories || [] });
  } catch (error) {
    console.error("Error fetching impact stories:", error);
    return c.json({ error: "Failed to fetch impact stories" }, 500);
  }
});

app.post("/make-server-b2211b85/impact-stories", async (c) => {
  try {
    const body = await c.req.json();
    const { stories } = body;
    
    await kv.set("impact_stories", stories);
    
    return c.json({ success: true, stories });
  } catch (error) {
    console.error("Error updating impact stories:", error);
    return c.json({ error: "Failed to update impact stories" }, 500);
  }
});

// News endpoints
app.get("/make-server-b2211b85/news", async (c) => {
  try {
    const news = await kv.get("news");
    return c.json({ news: news || [] });
  } catch (error) {
    console.error("Error fetching news:", error);
    return c.json({ error: "Failed to fetch news" }, 500);
  }
});

app.post("/make-server-b2211b85/news", async (c) => {
  try {
    const body = await c.req.json();
    const { news } = body;
    
    await kv.set("news", news);
    
    return c.json({ success: true, news });
  } catch (error) {
    console.error("Error updating news:", error);
    return c.json({ error: "Failed to update news" }, 500);
  }
});

Deno.serve(app.fetch);