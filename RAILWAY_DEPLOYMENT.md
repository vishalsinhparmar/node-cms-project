# Railway Deployment Guide

## 🚀 Quick Deploy to Railway

### **Option 1: Deploy with Mock Data (Recommended)**

1. **Push to GitHub** (make repository public temporarily)
2. **Connect to Railway**: https://railway.app
3. **Deploy from GitHub** - Select your repository
4. **No environment variables needed** - Will automatically use mock data

### **Option 2: Deploy with Real Cosmic CMS**

1. **Set up Cosmic CMS account**: https://cosmicjs.com
2. **Create a bucket** and get your credentials
3. **Add Railway Environment Variables**:
   ```
   NODE_ENV=production
   COSMIC_BUCKET=your-actual-bucket-slug
   COSMIC_READ_KEY=your-actual-read-key
   COSMIC_WRITE_KEY=your-actual-write-key
   USE_MOCK_DATA=false
   ```

## 🔧 Current Configuration

- **✅ Automatic fallback to mock data** if no valid CMS credentials
- **✅ Works in both development and production**
- **✅ No crashes from missing Cosmic CMS**
- **✅ Professional content displays properly**

## 🌐 Live Demo

Your website will show:
- Professional business homepage
- Working carousel slider
- Complete navigation menu
- Contact information
- Mobile-responsive design

## 🛠️ Troubleshooting

**If you see "Bucket not found" error:**
1. Check Railway logs for detailed error messages
2. Ensure environment variables are set correctly
3. Verify Cosmic CMS credentials if using real CMS
4. Default behavior: Falls back to mock data automatically

**Railway Deployment URL:**
- Your app will be available at: `https://your-app-name.railway.app`
- Custom domain can be configured in Railway dashboard
