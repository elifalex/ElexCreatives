# 🚀 Quick Deployment Guide

## Deploy to Vercel in 5 Minutes

### Option 1: GitHub + Vercel (Recommended)

1. **Create GitHub Repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it: `elex-creatives`
   - Keep it public or private
   - Click "Create repository"

2. **Push Code to GitHub**
   ```bash
   cd C:\Users\Alex\elex-creatives
   git remote add origin https://github.com/YOUR-USERNAME/elex-creatives.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Done! Your site is live 🎉

### Option 2: Direct Vercel CLI Deploy

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd C:\Users\Alex\elex-creatives
vercel

# For production
vercel --prod
```

## Post-Deployment Checklist

After deploying, update these:

- [ ] Add Vercel URL to README.md
- [ ] Test all links work
- [ ] Check mobile responsiveness
- [ ] Update partner name
- [ ] Add real app screenshots
- [ ] Update email address
- [ ] Connect custom domain (optional)

## Custom Domain Setup

1. Go to your Vercel dashboard
2. Select your project
3. Click "Settings" → "Domains"
4. Add your domain (e.g., `elexcreatives.com`)
5. Update DNS settings as shown
6. Wait for DNS propagation (~24 hours)

## Updating Your Site

After making changes:

```bash
git add .
git commit -m "Update portfolio"
git push

# Vercel auto-deploys on push!
```

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- Email: contact@elexcreatives.com
