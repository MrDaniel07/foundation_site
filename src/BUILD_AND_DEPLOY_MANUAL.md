# Manual Build & Deploy Guide for Netlify

## Why Your Site Looks Broken

When you upload just `index.html`, the browser can't:
- ❌ Run React code (needs compilation)
- ❌ Process Tailwind CSS (needs build step)
- ❌ Resolve imports (needs bundling)
- ❌ Load components properly

You need to **BUILD** the project first!

---

## Option 1: Build Locally Then Upload to Netlify

### Step 1: Download Your Project Files

1. Download all files from Figma Make
2. Extract to a folder on your computer

### Step 2: Install Dependencies

Open Terminal/Command Prompt in the project folder:

```bash
cd /path/to/your/project

# Install all required packages
npm install
```

This installs React, Vite, Tailwind, and all dependencies.

### Step 3: Create Required Configuration Files

Your project needs these files to build properly:

#### A. Create `package.json` (if missing)

```json
{
  "name": "prince-goodwill-foundation",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "tailwindcss": "^4.0.0",
    "vite": "^5.0.8"
  }
}
```

#### B. Create `vite.config.ts`

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
```

#### C. Create `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src", "components", "utils", "App.tsx"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

#### D. Verify `index.html` structure

Your `index.html` should look like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Prince Goodwill Foundation</title>
    <link rel="stylesheet" href="/styles/globals.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/App.tsx"></script>
  </body>
</html>
```

### Step 4: Build the Project

Run the build command:

```bash
npm run build
```

This creates a `dist` folder with all compiled files:

```
dist/
├── index.html (processed)
├── assets/
│   ├── index-abc123.js (your bundled React app)
│   ├── index-xyz789.css (your compiled Tailwind CSS)
│   └── [other assets]
└── [other files]
```

### Step 5: Upload to Netlify

#### Via Netlify Web Interface (Drag & Drop):

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **"Add new site"** → **"Deploy manually"**
3. **Drag the entire `dist` folder** to the upload area
4. Wait for deployment to complete
5. Your site is now live!

#### Via Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy the dist folder
netlify deploy --prod --dir=dist
```

### Step 6: Configure Environment Variables

After deploying, add your Supabase environment variables:

1. Go to **Site settings** → **Environment variables**
2. Add all your Supabase keys (see DEPLOYMENT_GUIDE.md for details)
3. Redeploy if needed

### Step 7: Add Custom Domain (Optional)

Follow the domain setup steps in DEPLOYMENT_GUIDE.md

---

## Option 2: Automatic GitHub + Netlify (Easier!)

Instead of manual builds, use continuous deployment:

### Advantages:
- ✅ Automatic builds on every code change
- ✅ No need to build locally
- ✅ Version control with Git
- ✅ Rollback capability
- ✅ Preview deployments for branches

### Setup:

1. **Create GitHub repository** and push all source files
2. **Connect to Netlify**:
   - Click "Import from Git"
   - Select your GitHub repo
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `dist`
3. **Add environment variables** in Netlify settings
4. **Deploy automatically!**

Every `git push` triggers a new deployment.

---

## Critical Files Checklist

Make sure your project has these files:

### Source Files (for building):
- [ ] `index.html` (with script tag pointing to App.tsx)
- [ ] `App.tsx` (main React component)
- [ ] `/components/*.tsx` (all components)
- [ ] `/styles/globals.css` (Tailwind styles)
- [ ] `/utils/supabase/info.tsx` (config)
- [ ] `package.json` (dependencies & scripts)
- [ ] `vite.config.ts` (Vite configuration)
- [ ] `tsconfig.json` (TypeScript configuration)

### After Building (in `dist` folder):
- [ ] `dist/index.html` (processed HTML)
- [ ] `dist/assets/*.js` (compiled JavaScript)
- [ ] `dist/assets/*.css` (compiled CSS)
- [ ] `dist/assets/*` (images, fonts, etc.)

---

## Common Issues & Fixes

### Issue: "Blank white page after deploying"

**Causes:**
- Environment variables not set
- Build failed
- Wrong publish directory

**Fixes:**
1. Check Netlify build logs for errors
2. Verify environment variables are set
3. Ensure publish directory is `dist` not root
4. Check browser console for errors

### Issue: "404 on page refresh"

**Cause:** React Router needs a redirect rule

**Fix:** Create `netlify.toml` in your project root:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This makes all routes work properly with React Router.

### Issue: "CSS not loading / Unstyled page"

**Causes:**
- Tailwind not compiled
- CSS file path wrong
- Build didn't include CSS

**Fixes:**
1. Verify `globals.css` has Tailwind directives:
   ```css
   @import "tailwindcss";
   ```
2. Rebuild the project: `npm run build`
3. Check `dist/assets/` for CSS files

### Issue: "Import errors"

**Cause:** Dependencies not installed

**Fix:**
```bash
npm install
npm run build
```

---

## Environment Variables You Need

Make sure these are set in Netlify (NOT in code!):

```
SUPABASE_URL=your-project-url.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_DB_URL=your-db-connection-string
RESEND_API_KEY=your-resend-key (if using email)
```

**⚠️ NEVER commit these to GitHub!**

---

## Testing Your Deployment

After deploying, test these:

1. **Home page loads** with all images and styles
2. **Navigation works** (all links function)
3. **Admin panel** accessible at `/admin`
4. **Forms submit** successfully
5. **Mobile responsive** design works
6. **HTTPS enabled** (green lock icon)

---

## Summary: What Makes It Look Good?

The Figma Make published site looks good because it:

1. ✅ **Builds the React code** (JSX → JavaScript)
2. ✅ **Compiles Tailwind CSS** (processes all utility classes)
3. ✅ **Bundles all imports** (resolves dependencies)
4. ✅ **Optimizes assets** (minifies, compresses)
5. ✅ **Creates production build** (fast, optimized)

When you upload just `index.html`, you're missing ALL of this!

**Solution:** Always build first, then deploy the `dist` folder!

---

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview build locally
npm run preview

# Deploy to Netlify (after building)
netlify deploy --prod --dir=dist
```

---

**Remember:** React apps need a build process. Never deploy source files directly! 🚀
