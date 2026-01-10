# Hope Foundation - Charity Website

A modern, professional charity foundation website with a full-featured admin panel. Built with semantic HTML, CSS, and vanilla JavaScript.

## Features

### Public Website
- **Home Page**: Full-width hero, mission statement, communities served, leadership highlight, impact preview
- **About Page**: Mission, vision, core values, approach
- **Founder Page**: Detailed biography of Sarah Mitchell with professional layout
- **Programs**: Dynamic program listings with image cards
- **Impact**: Success stories and measurable outcomes
- **News**: Latest updates and announcements
- **Contact**: Contact form with message storage

### Admin Panel
- **Dashboard**: Overview statistics and quick actions
- **Programs Management**: Create, edit, delete, reorder, and toggle visibility
- **Impact Stories Management**: Full CRUD operations for impact stories
- **News Management**: Publish and manage news articles
- **Contact Messages**: View and delete contact form submissions
- **Page Content Editor**: Edit SEO metadata for pages
- **Settings**: Change admin password, update username, export/clear data

### Design Features
- Picture-first interface with full-width hero sections
- Calm, professional color palette
- Clean typography with clear hierarchy
- Responsive design (mobile, tablet, desktop)
- Subtle hover effects and transitions
- Generous spacing and breathing room
- Modern card-based layouts

### SEO Optimization
- Semantic HTML5 structure
- Proper heading hierarchy
- Optimized meta titles and descriptions
- Alt text for all images
- Founder name repeated naturally throughout
- Clean internal linking

## Getting Started

### Viewing the Site
1. Open `index.html` in a web browser to view the public website
2. Navigate through the pages using the header navigation

### Accessing the Admin Panel
1. Navigate to `admin/index.html`
2. **Default login credentials:**
   - Username: `admin`
   - Password: `admin123`
3. After login, you can:
   - View dashboard statistics
   - Manage programs, impact stories, and news
   - View contact messages
   - Edit SEO settings
   - Change password and username

## File Structure

```
/
├── index.html              # Home page
├── about.html              # About page
├── founder.html            # Founder biography
├── programs.html           # Programs listing
├── impact.html             # Impact stories
├── news.html               # News & updates
├── contact.html            # Contact form
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   ├── main.js             # Navigation and utilities
│   ├── programs.js         # Programs page logic
│   ├── impact.js           # Impact page logic
│   ├── news.js             # News page logic
│   └── contact.js          # Contact form handling
└── admin/
    ├── index.html          # Admin login
    ├── dashboard.html      # Admin dashboard
    ├── programs.html       # Programs management
    ├── impact.html         # Impact management
    ├── news.html           # News management
    ├── messages.html       # Contact messages
    ├── content.html        # Content editor
    ├── settings.html       # Admin settings
    ├── css/
    │   └── admin.css       # Admin panel styles
    └── js/
        ├── auth.js         # Authentication
        ├── dashboard.js    # Dashboard logic
        ├── programs-admin.js
        ├── impact-admin.js
        ├── news-admin.js
        ├── messages-admin.js
        ├── content-admin.js
        └── settings-admin.js
```

## Data Storage

All data is stored in the browser's localStorage:
- `hopefoundation_programs` - Programs data
- `hopefoundation_impact` - Impact stories
- `hopefoundation_news` - News articles
- `hopefoundation_messages` - Contact form submissions
- `hopefoundation_seo` - SEO metadata
- `hopefoundation_admin_credentials` - Admin login credentials
- `hopefoundation_admin_auth` - Authentication status

## Customization

### Changing Colors
Edit the CSS variables in `/css/styles.css`:
```css
:root {
    --color-primary: #2c5f7c;
    --color-secondary: #7a9aa8;
    --color-accent: #d4a574;
    /* ... */
}
```

### Changing Images
- Public pages: Update image URLs in the HTML files
- Dynamic content: Use the admin panel to update images
- Images from Unsplash are used throughout (can be replaced with your own)

### Editing Static Content
- Mission statements: Edit in `about.html`
- Founder biography: Edit in `founder.html`
- Footer information: Edit in each HTML file's footer section

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Security Note

This is a frontend-only demonstration. For production use:
- Implement proper backend authentication
- Use a real database instead of localStorage
- Add server-side form validation
- Implement HTTPS
- Use environment variables for sensitive data
- Add CSRF protection

## License

This is a demonstration project for educational purposes.

---

**Hope Foundation** - Founded by Sarah Mitchell
Creating lasting change in communities worldwide.
