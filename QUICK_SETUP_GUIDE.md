# Quick Setup Guide - Fixed Node.js Project

## ✅ Issues Fixed:
1. **Removed malicious code** from `app.js` and `helpers/css.js`
2. **Created missing `config/development.js`** file
3. **Fixed module system** inconsistencies in `config/production.js`
4. **Updated package.json scripts** to use correct entry point
5. **Added nodemon** to devDependencies

## 🚀 How to Run Locally:

### Step 1: Install Dependencies
```bash
cd c:\Users\vishalsinh\Downloads\code_base\node
npm install
```

### Step 2: Manual Cleanup (Important!)
**Delete these malicious files manually:**
- Delete: `public/css/types.txt`
- Delete: `helpers/css.js`

### Step 3: Set Environment Variables
Create a `.env` file or set these environment variables:
```bash
NODE_ENV=development
PORT=5000
COSMIC_BUCKET=test-bucket
COSMIC_READ_KEY=test-key
COSMIC_WRITE_KEY=test-key
SENDGRID_FUNCTION_ENDPOINT=https://example.com
```

### Step 4: Run the Application
```bash
# Option 1: Use the new dev script
npm run dev

# Option 2: Use the development script
npm run development

# Option 3: Run directly
node app.js
```

## 🌐 Access Your Application:
- **URL:** http://localhost:5000
- **Default Port:** 5000 (configurable via PORT env var)

## 🔧 What Was Fixed:

### 1. **Security Issues Resolved:**
- ❌ Removed `eval()` function from `helpers/css.js`
- ❌ Disabled malicious `types.txt` file loading
- ✅ Application now safe to run

### 2. **Configuration Issues Fixed:**
- ✅ Created missing `config/development.js`
- ✅ Fixed ES6/CommonJS module conflicts
- ✅ Updated package.json scripts

### 3. **Dependencies:**
- ✅ Added missing `nodemon` for development
- ✅ Fixed script entry points

## 🚨 Important Notes:

1. **Cosmic CMS:** The app uses Cosmic CMS for content. You'll need valid API keys for full functionality.

2. **Contact Form:** Requires SendGrid endpoint for email functionality.

3. **Development Mode:** The app will run in development mode with basic functionality even without CMS keys.

## 🐛 If You Still Have Issues:

### Common Problems & Solutions:

**Problem:** "Cannot find module" errors
**Solution:** Run `npm install` again

**Problem:** Port already in use
**Solution:** Change PORT in environment variables or kill existing process

**Problem:** CMS-related errors
**Solution:** Set proper COSMIC_* environment variables or use test values

**Problem:** Babel errors
**Solution:** The current Babel 6 setup should work. If issues persist, we can upgrade to Babel 7.

## ✅ Success Indicators:
- Server starts without errors
- Console shows: "🌎  Go to http://localhost:5000"
- Website loads in browser (even if content is missing due to CMS)

## 📞 Need Help?
If you encounter any issues, the most common problems are:
1. Missing environment variables
2. Port conflicts
3. Malicious files not deleted manually

The application should now run successfully in development mode!
