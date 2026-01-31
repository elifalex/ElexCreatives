# SEO Verification Guide

After deploying to production, use this checklist to verify everything is working correctly.

## Manual Verification Steps

### 1. Check Core Files

Open these URLs in your browser and verify they work:

- https://elexcreatives.com/robots.txt
  - Should show: User-agent, Allow, Sitemap reference
  
- https://elexcreatives.com/sitemap.xml
  - Should list all pages (homepage, service page, blog, blog posts)
  
### 2. Check New Pages

- https://elexcreatives.com/blog
  - Should show blog index with 2 articles
  
- https://elexcreatives.com/blog/mobile-app-mvp-guide
  - Should show full blog post with styled content
  
- https://elexcreatives.com/blog/react-native-vs-native-development
  - Should show full blog post with styled content
  
- https://elexcreatives.com/services/mobile-app-development-for-startups
  - Should show full service page with case studies and FAQ

### 3. Verify Metadata (View Page Source)

For EACH page, right-click → View Page Source and check for:

Homepage:
- metadataBase: https://elexcreatives.com
- canonical link
- robots meta tags
- Open Graph tags
- Organization JSON-LD script

Service Page:
- Unique title and description
- Canonical URL
- Service JSON-LD script
- FAQ JSON-LD script

Blog Posts:
- Unique title and description
- Canonical URL
- Article JSON-LD script

### 4. Test Google Rich Results

Go to: https://search.google.com/test/rich-results

Test these URLs:
1. https://elexcreatives.com (should show Organization)
2. https://elexcreatives.com/services/mobile-app-development-for-startups (should show Service + FAQ)
3. https://elexcreatives.com/blog/mobile-app-mvp-guide (should show Article)

### 5. Test Preview Deployment Noindex

Deploy a preview branch to Vercel, then:

```bash
curl -I https://your-preview.vercel.app
```

Should return: `X-Robots-Tag: noindex, nofollow`

### 6. Verify Plausible Analytics

1. Log in to your Plausible account
2. Select elexcreatives.com
3. Wait 5-10 minutes after deployment
4. Visit your site a few times
5. Check if pageviews appear in Plausible dashboard

### 7. Set Up Google Search Console

1. Go to https://search.google.com/search-console
2. Add property: elexcreatives.com
3. Choose "HTML tag" verification method
4. Copy the verification meta tag content code
5. Update `app/layout.tsx` line with verification code:
   ```typescript
   verification: {
     google: 'YOUR_VERIFICATION_CODE_HERE', // Replace PLACEHOLDER
   },
   ```
6. Deploy the change
7. Click "Verify" in Search Console
8. Submit sitemap: https://elexcreatives.com/sitemap.xml
9. Request indexing for:
   - Homepage
   - Service page
   - Blog posts

## Automated Checks (Optional)

You can use these online tools:

- **Screaming Frog SEO Spider** (free for 500 URLs)
  - Crawl your site to find broken links, missing metadata
  
- **Google PageSpeed Insights**
  - https://pagespeed.web.dev/
  - Test Core Web Vitals
  
- **W3C Markup Validator**
  - https://validator.w3.org/
  - Validate HTML structure

## Expected Results

After 1 week:
- All pages should be in Google Search Console "Discovered" or "Crawled"
- Plausible should show consistent traffic
- No crawl errors in Search Console

After 1 month:
- Pages should move from "Discovered" to "Indexed"
- Ranking for "Elex Creatives" brand term
- FAQ schema may appear in search results

After 3 months:
- Organic traffic growing
- Ranking for long-tail keywords
- Featured snippets from FAQ content possible
