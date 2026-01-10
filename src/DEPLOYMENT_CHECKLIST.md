# 🎯 Deployment Checklist

## Before You Start

- [ ] I understand this is a **React app**, not simple HTML
- [ ] I know I need to **build** before deploying
- [ ] I will deploy the **dist folder**, not source files
- [ ] I have my **Supabase credentials** ready

## Choose Your Path

### ✅ Path A: GitHub + Netlify (Recommended)
- [ ] I have a GitHub account
- [ ] I have a Netlify account
- [ ] I'm ready to use Git commands

**Go to:** `DEPLOYMENT_GUIDE.md` → Part 1

### ✅ Path B: Manual Build & Upload
- [ ] I have Node.js installed
- [ ] I'm comfortable with terminal/command line
- [ ] I'll build locally before uploading

**Go to:** `BUILD_AND_DEPLOY_MANUAL.md`

---

## Path A: GitHub → Netlify (Automatic)

### Step 1: Prepare Files
- [ ] Downloaded project from Figma Make
- [ ] Extracted to a folder

### Step 2: Push to GitHub
- [ ] Created new repository on GitHub
- [ ] Ran `git init` in project folder
- [ ] Ran `git add .`
- [ ] Ran `git commit -m "Initial commit"`
- [ ] Added remote: `git remote add origin [your-repo-url]`
- [ ] Pushed: `git push -u origin main`

### Step 3: Connect Netlify
- [ ] Logged into Netlify
- [ ] Clicked "Add new site" → "Import an existing project"
- [ ] Selected "Deploy with GitHub"
- [ ] Authorized Netlify to access GitHub
- [ ] Selected my repository

### Step 4: Configure Build
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Clicked "Deploy site"
- [ ] Build succeeded (checked deploy logs)

### Step 5: Add Environment Variables
- [ ] Went to Site settings → Environment variables
- [ ] Added `SUPABASE_URL`
- [ ] Added `SUPABASE_ANON_KEY`
- [ ] Added `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Added `SUPABASE_DB_URL`
- [ ] Triggered new deployment

### Step 6: Custom Domain (Optional)
- [ ] Went to Domain settings
- [ ] Added custom domain
- [ ] Updated DNS settings at registrar
- [ ] Verified DNS configuration
- [ ] Provisioned SSL certificate
- [ ] Enabled "Force HTTPS"

### Step 7: Test Everything
- [ ] Home page loads with all styles
- [ ] Programs page shows all 6 programs
- [ ] News page shows all articles
- [ ] Gallery displays images
- [ ] Contact form submits
- [ ] Admin panel accessible at `/admin`
- [ ] All admin CRUD operations work
- [ ] Site is responsive on mobile
- [ ] HTTPS is enabled

✅ **DONE! Your site is live!**

---

## Path B: Manual Build & Upload

### Step 1: Install Node.js
- [ ] Downloaded Node.js from nodejs.org
- [ ] Installed (LTS version recommended)
- [ ] Verified: `node --version`
- [ ] Verified: `npm --version`

### Step 2: Prepare Project
- [ ] Downloaded project from Figma Make
- [ ] Extracted to a folder
- [ ] Opened terminal in project folder

### Step 3: Install Dependencies
- [ ] Ran `npm install`
- [ ] All packages installed successfully
- [ ] No error messages

### Step 4: Build Project
- [ ] Ran `npm run build`
- [ ] Build completed successfully
- [ ] `dist` folder created
- [ ] `dist` folder contains files:
  - [ ] `index.html`
  - [ ] `assets/` folder with JS and CSS files

### Step 5: Deploy to Netlify
- [ ] Logged into Netlify
- [ ] Clicked "Add new site" → "Deploy manually"
- [ ] Dragged the **`dist` folder** to upload area
- [ ] ⚠️ Made sure to upload `dist`, NOT the whole project
- [ ] Deployment completed

### Step 6: Add Environment Variables
- [ ] Went to Site settings → Environment variables
- [ ] Added `SUPABASE_URL`
- [ ] Added `SUPABASE_ANON_KEY`
- [ ] Added `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Added `SUPABASE_DB_URL`

### Step 7: Redeploy
- [ ] Went to Deploys
- [ ] Clicked "Trigger deploy"
- [ ] Deployment completed

### Step 8: Custom Domain (Optional)
- [ ] Went to Domain settings
- [ ] Added custom domain
- [ ] Updated DNS settings at registrar
- [ ] Verified DNS configuration
- [ ] Provisioned SSL certificate
- [ ] Enabled "Force HTTPS"

### Step 9: Test Everything
- [ ] Home page loads with all styles
- [ ] Programs page shows all 6 programs
- [ ] News page shows all articles
- [ ] Gallery displays images
- [ ] Contact form submits
- [ ] Admin panel accessible at `/admin`
- [ ] All admin CRUD operations work
- [ ] Site is responsive on mobile
- [ ] HTTPS is enabled

✅ **DONE! Your site is live!**

---

## Environment Variables Reference

Copy these values from your Supabase dashboard:

```
Variable Name: SUPABASE_URL
Value: https://[your-project-id].supabase.co
Where to find: Supabase → Settings → API → Project URL

Variable Name: SUPABASE_ANON_KEY
Value: eyJhbG... (long string)
Where to find: Supabase → Settings → API → anon/public key

Variable Name: SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbG... (long string)
Where to find: Supabase → Settings → API → service_role key

Variable Name: SUPABASE_DB_URL
Value: postgresql://postgres:[password]@...
Where to find: Supabase → Settings → Database → Connection string
```

⚠️ **IMPORTANT:** Never share or commit these keys!

---

## Troubleshooting Checklist

### Issue: Site looks broken (no styles)

**Check:**
- [ ] Did I deploy the `dist` folder (not source files)?
- [ ] Did the build complete successfully?
- [ ] Are there CSS files in `dist/assets/`?
- [ ] Is `/styles/globals.css` imported correctly?

**Fix:**
- Rebuild: `npm run build`
- Redeploy the `dist` folder

### Issue: Blank white page

**Check:**
- [ ] Browser console for errors (F12)
- [ ] Netlify deploy logs for build errors
- [ ] Environment variables are set
- [ ] `index.html` in dist folder is not empty

**Fix:**
- Check browser console
- Verify environment variables
- Rebuild and redeploy

### Issue: API calls failing

**Check:**
- [ ] All environment variables set in Netlify
- [ ] SUPABASE_URL is correct
- [ ] SUPABASE_ANON_KEY is correct
- [ ] Network tab shows API calls (F12 → Network)

**Fix:**
- Verify all Supabase credentials
- Check Supabase dashboard is accessible
- Redeploy after adding variables

### Issue: 404 on page refresh

**Check:**
- [ ] `netlify.toml` file exists in project
- [ ] Redirect rules configured

**Fix:**
- `netlify.toml` is already included!
- Redeploy if needed

### Issue: Build failed on Netlify

**Check:**
- [ ] Build logs in Netlify (look for red errors)
- [ ] `package.json` exists
- [ ] `vite.config.ts` exists
- [ ] Node version (should be 18)

**Fix:**
- Check error messages in build logs
- All config files are included in your project
- Set Node version to 18 in Netlify

### Issue: Images not loading

**Check:**
- [ ] Environment variables set
- [ ] Supabase Storage bucket exists
- [ ] Network tab shows image requests
- [ ] CORS settings in Supabase

**Fix:**
- Check Supabase Storage permissions
- Verify environment variables
- Check browser console for errors

---

## Final Verification

Before considering deployment complete:

### Functionality
- [ ] All 7 public pages load correctly
- [ ] Admin login works
- [ ] Can create/edit/delete programs
- [ ] Can create/edit/delete news
- [ ] Can upload/delete gallery images
- [ ] Contact form sends messages
- [ ] All navigation links work

### Performance
- [ ] Page loads in < 3 seconds
- [ ] Images optimized and loading
- [ ] No console errors
- [ ] Mobile responsive

### Security
- [ ] HTTPS enabled (green padlock)
- [ ] Environment variables not in code
- [ ] Service role key not exposed
- [ ] Admin panel requires login

### SEO
- [ ] Page titles correct
- [ ] Meta descriptions present
- [ ] Open Graph tags working
- [ ] Structured data included

---

## Need Help?

### If Stuck:

1. **Check the guides:**
   - [ ] Read `UNDERSTANDING_THE_BUILD_PROCESS.md`
   - [ ] Review `QUICK_START_DEPLOYMENT.md`
   - [ ] Check `BUILD_AND_DEPLOY_MANUAL.md`

2. **Check logs:**
   - [ ] Browser console (F12)
   - [ ] Netlify deploy logs
   - [ ] Network tab for failed requests

3. **Common fixes:**
   - [ ] Rebuild: `npm run build`
   - [ ] Clear cache
   - [ ] Verify environment variables
   - [ ] Redeploy

---

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview build locally
npm run preview

# Deploy with Netlify CLI
netlify deploy --prod --dir=dist

# Check Node version
node --version

# Check npm version
npm --version
```

---

## Success! 🎉

If all checkboxes are checked, congratulations!

Your Prince Goodwill Foundation website is:
- ✅ Live on the internet
- ✅ Fully functional with all features
- ✅ Connected to Supabase
- ✅ Secure with HTTPS
- ✅ Responsive on all devices
- ✅ Ready for your custom domain

**Next:** Share your website with the world! 🌍

---

**Remember:** Always build first, deploy second!
