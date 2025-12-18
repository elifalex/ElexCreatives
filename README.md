# Elex Creatives Portfolio

Professional portfolio website showcasing mobile app development work for **DailyIntention** and **SpeedDots**.

Built with Next.js 16, TypeScript, and Tailwind CSS. Fully responsive and optimized for deployment on Vercel.

🌐 **Live Site**: [Add your Vercel URL here]

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/elex-creatives.git
   cd elex-creatives
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📦 Project Structure

```
elex-creatives/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   ├── globals.css         # Global styles
│   └── favicon.ico         # Site favicon
├── public/
│   └── screenshots/        # Add your app screenshots here
├── README.md
├── package.json
└── tailwind.config.ts
```

---

## 🎨 Customization Guide

### 1. Adding App Screenshots

Replace the placeholder device mockups with real screenshots:

**Step 1:** Add screenshots to `public/screenshots/`
```
public/
└── screenshots/
    ├── dailyintention-1.png
    ├── dailyintention-2.png
    ├── dailyintention-3.png
    ├── speeddots-1.png
    ├── speeddots-2.png
    └── speeddots-3.png
```

**Step 2:** Update `app/page.tsx` to use real images

Find the placeholder section (around line 317):
```tsx
{/* Screenshot Placeholder */}
<div className="absolute inset-0 flex items-center justify-center bg-white/90">
  <div className="text-center p-8">
    <div className="text-6xl mb-4">{app.icon}</div>
    <p className="text-gray-400 text-sm font-medium">
      Replace with actual screenshot
    </p>
  </div>
</div>
```

Replace with:
```tsx
<Image
  src={`/screenshots/${app.name.toLowerCase()}-1.png`}
  alt={`${app.name} screenshot`}
  fill
  className="object-cover"
/>
```

**Step 3:** Import Image component at the top
```tsx
import Image from "next/image";
```

### 2. Update Partner Information

Edit `app/page.tsx` line 172:
```tsx
<h3 className="text-2xl font-bold mb-2">[Partner Name]</h3>
```

Replace with actual name and update the bio below.

### 3. Update Contact Email

Edit `app/page.tsx` line 476:
```tsx
contact@elexcreatives.com
```

Replace with your actual email address.

### 4. Add Social Media Links

Edit `app/page.tsx` lines 517-525:
```tsx
<a href="https://twitter.com/YOUR-HANDLE" ...>Twitter</a>
<a href="https://linkedin.com/in/YOUR-PROFILE" ...>LinkedIn</a>
<a href="https://github.com/YOUR-USERNAME" ...>GitHub</a>
```

### 5. Update App Store Links

For DailyIntention (line 43-44):
```tsx
appStore: "#", // Replace with actual App Store URL
playStore: "#", // Replace with actual Play Store URL
```

SpeedDots links are already configured.

### 6. Update Location

Edit `app/page.tsx` line 189:
```tsx
We're a mobile app development duo based in [Location]
```

### 7. Add More Apps

To showcase additional apps, add to the `apps` array in `app/page.tsx`:

```tsx
const apps = [
  // Existing apps...
  {
    name: "Your New App",
    tagline: "Your tagline",
    description: "Description of your app",
    icon: "🎮", // Choose an emoji
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
    ],
    techStack: ["React Native", "Expo", "TypeScript"],
    screenshots: 3,
    appStore: "https://...",
    playStore: "https://...",
  },
];
```

---

## 🚀 Deployment to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Portfolio website ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!** Your site will be live at `your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **For production**
   ```bash
   vercel --prod
   ```

### Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS settings as instructed

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Package Manager**: npm

---

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Device mockup frames for app screenshots
- ✅ Smooth animations and transitions
- ✅ Portfolio showcase for both apps
- ✅ Contact form with validation
- ✅ SEO optimized
- ✅ Fast page loads with Next.js optimization
- ✅ Professional UI/UX
- ✅ Easy to customize

---

## 🎯 Sections Included

1. **Hero Section** - Team introduction and CTA
2. **About Us** - Mission, approach, values
3. **Portfolio** - Detailed app showcases with:
   - App descriptions
   - Key features
   - Tech stack
   - Store badges
   - Device mockups
4. **Services** - What you offer
5. **Contact** - Form and email
6. **Footer** - Links and social media

---

## 📸 Adding Screenshots/Videos

### For Static Images:

1. Export screenshots from your apps (ideally 1170x2532 for iPhone)
2. Save to `public/screenshots/`
3. Update code to use `<Image>` component (see Customization Guide)

### For Videos:

Add video element in the device mockup:
```tsx
<video
  src="/videos/app-demo.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
/>
```

---

## 🔧 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## 📝 Environment Variables (Optional)

If you want to add form functionality with a backend:

Create `.env.local`:
```env
NEXT_PUBLIC_CONTACT_API_URL=https://your-api.com/contact
```

---

## 🤝 Support

For questions or issues:
- Email: contact@elexcreatives.com
- GitHub Issues: [Create an issue](https://github.com/YOUR-USERNAME/elex-creatives/issues)

---

## 📄 License

© 2025 Elex Creatives. All rights reserved.

---

## 🎉 Next Steps

1. ✅ Customize content (partner name, location, email)
2. ✅ Add real app screenshots
3. ✅ Update App Store links for DailyIntention
4. ✅ Add social media links
5. ✅ Push to GitHub
6. ✅ Deploy to Vercel
7. ✅ Share your portfolio!

---

**Built with ❤️ by Elex Creatives**
