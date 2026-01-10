# Prince Goodwill Foundation - Deployment Guide

## Complete Guide: GitHub → Netlify → Custom Domain → Supabase Integration

---

## 📋 Prerequisites

Before you begin, ensure you have:
- A GitHub account
- A Netlify account (free tier is fine)
- Your custom domain name
- Your Supabase project credentials (you already have these)

---

## Part 1: Setting Up GitHub Repository

### Step 1: Create a New GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the details:
   - **Repository name**: `prince-goodwill-foundation` (or your preferred name)
   - **Description**: "Official website for Prince Goodwill Foundation"
   - **Visibility**: Choose **Public** (for free hosting) or **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we'll add these)
4. Click **"Create repository"**

### Step 2: Prepare Your Local Files

1. Download all files from this Figma Make project:
   - Click the download/export button in Figma Make
   - Extract the ZIP file to a folder on your computer

2. Open Terminal/Command Prompt and navigate to the project folder:
   ```bash
   cd /path/to/your/project/folder
   ```

3. Initialize Git and push to GitHub:
   ```bash
   # Initialize git repository
   git init
   
   # Add all files
   git add .
   
   # Create first commit
   git commit -m "Initial commit - Prince Goodwill Foundation website"
   
   # Add your GitHub repository as remote
   # Replace YOUR_USERNAME and YOUR_REPO with your actual GitHub username and repository name
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

---

## Part 2: Deploying to Netlify

### Step 1: Connect Netlify to GitHub

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **"Add new site"** → **"Import an existing project"**
3. Click **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub account (if first time)
5. Search for and select your repository: `prince-goodwill-foundation`

### Step 2: Configure Build Settings

Netlify should auto-detect the settings, but verify these:

- **Branch to deploy**: `main`
- **Build command**: `npm run build` (or leave empty if using Vite's default)
- **Publish directory**: `dist`
- **Base directory**: (leave empty)

Click **"Deploy site"**

### Step 3: Add Environment Variables to Netlify

This is **CRITICAL** for Supabase to work!

1. Once deployed, go to **Site settings** → **Environment variables**
2. Click **"Add a variable"** and add each of these one by one:

   ```
   Key: SUPABASE_URL
   Value: [Your Supabase project URL]
   
   Key: SUPABASE_ANON_KEY
   Value: [Your Supabase anon/public key]
   
   Key: SUPABASE_SERVICE_ROLE_KEY
   Value: [Your Supabase service role key - KEEP THIS SECRET!]
   
   Key: SUPABASE_DB_URL
   Value: [Your Supabase database URL]
   
   Key: RESEND_API_KEY
   Value: [Your Resend API key for email]
   ```

3. After adding all variables, go to **Deploys** → **Trigger deploy** → **Deploy site**

---

## Part 3: Connecting Your Custom Domain

### Step 1: Add Domain in Netlify

1. In your Netlify site dashboard, go to **Domain settings**
2. Click **"Add a domain"**
3. Enter your custom domain (e.g., `princegoodwillfoundation.org`)
4. Click **"Verify"**
5. Netlify will show you DNS configuration instructions

### Step 2: Configure DNS (Two Options)

**Option A: Use Netlify DNS (Recommended - Easiest)**

1. Netlify will provide you with nameservers like:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

2. Go to your domain registrar (where you bought the domain)
3. Find the DNS/Nameserver settings
4. Replace the current nameservers with Netlify's nameservers
5. Save changes (can take 24-48 hours to propagate)

**Option B: Use Custom DNS Records**

If you want to keep your current DNS provider:

1. In Netlify, it will show you the DNS records to add
2. Go to your DNS provider's dashboard
3. Add these records:

   **For root domain (princegoodwillfoundation.org):**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5 (Netlify's load balancer IP)
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: [your-site-name].netlify.app
   ```

4. Save changes (propagation takes 1-24 hours)

### Step 3: Enable HTTPS

1. Once DNS is configured and verified, go to **Domain settings** in Netlify
2. Scroll to **HTTPS**
3. Click **"Verify DNS configuration"**
4. Click **"Provision certificate"** (Netlify provides free SSL via Let's Encrypt)
5. Once provisioned, enable **"Force HTTPS"** to redirect all HTTP traffic to HTTPS

---

## Part 4: Configure Supabase for Production

### Step 1: Update Supabase URL Whitelist

1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **Authentication** → **URL Configuration**
4. Add these to **Site URL** and **Redirect URLs**:
   ```
   https://your-custom-domain.org
   https://www.your-custom-domain.org
   https://your-site-name.netlify.app
   ```

### Step 2: Update CORS Settings (If Needed)

1. In Supabase Dashboard, go to **Settings** → **API**
2. Scroll to **CORS**
3. Add your domain:
   ```
   https://your-custom-domain.org
   https://www.your-custom-domain.org
   ```

### Step 3: Verify Edge Function Deployment

Your Supabase Edge Functions are already configured in the code. They will automatically work with your new domain because:

1. The frontend code uses `projectId` and `publicAnonKey` from environment variables
2. All API calls go to `https://[projectId].supabase.co/functions/v1/make-server-b2211b85/...`
3. Supabase handles authentication and routing automatically

**No additional configuration needed!** ✅

---

## Part 5: Testing Your Deployment

### Test Checklist

Visit your new website and test each feature:

- [ ] **Home page** loads with hero image and stats
- [ ] **Programs page** displays all 6 programs from Supabase
- [ ] **News page** displays news articles from Supabase
- [ ] **Gallery** shows images stored in Supabase
- [ ] **Contact form** submits successfully
- [ ] **Admin panel** login works at `/admin`
- [ ] **Admin CRUD operations** work for:
  - [ ] Programs
  - [ ] News articles
  - [ ] Gallery images
- [ ] **Responsive design** works on mobile/tablet
- [ ] **HTTPS** is enabled (green padlock in browser)
- [ ] **All images** load correctly

### Common Issues & Solutions

**Issue: "Failed to fetch programs/news"**
- **Solution**: Check that environment variables are set in Netlify and redeploy

**Issue: Images not loading**
- **Solution**: Verify Supabase Storage bucket permissions and signed URL generation

**Issue: Admin panel not working**
- **Solution**: Check browser console for errors, verify API endpoints

**Issue: Contact form not sending**
- **Solution**: Verify RESEND_API_KEY is set in Netlify environment variables

**Issue: Domain not working after 24 hours**
- **Solution**: Use [DNS Checker](https://dnschecker.org) to verify propagation
- **Solution**: Check nameservers are correct at your registrar

---

## Part 6: Ongoing Maintenance

### How to Update the Website

When you want to make changes:

1. Make changes in your local files
2. Test locally
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```
4. Netlify will automatically detect the push and redeploy (usually takes 1-2 minutes)

### Managing Content

All content is stored in Supabase and can be managed through:
- **Admin Panel**: `https://your-domain.org/admin`
- **Supabase Dashboard**: Direct database access for advanced users

### Backups

- **Code**: Automatically backed up on GitHub
- **Database**: Supabase provides automatic daily backups
- **Images**: Stored in Supabase Storage with redundancy

---

## 🎉 Summary

After completing this guide, you will have:

✅ **GitHub Repository** - Version-controlled source code  
✅ **Netlify Hosting** - Fast, global CDN with automatic deployments  
✅ **Custom Domain** - Professional branded URL with HTTPS  
✅ **Supabase Integration** - Fully functional backend with:
   - Database for programs, news, and content
   - Storage for images and media
   - Edge Functions for server-side logic
   - Real-time updates across all pages

**Your website is now live, secure, and fully functional!** 🚀

---

## 📞 Need Help?

- **Netlify Docs**: https://docs.netlify.com
- **Supabase Docs**: https://supabase.com/docs
- **GitHub Docs**: https://docs.github.com

---

## Security Reminders

⚠️ **IMPORTANT**: 
- Never commit `.env` files or expose `SUPABASE_SERVICE_ROLE_KEY` publicly
- Keep all sensitive keys in Netlify's environment variables only
- Regularly update dependencies for security patches
- Monitor Supabase usage to stay within free tier limits (if applicable)

---

**Good luck with your deployment!** 🙏
