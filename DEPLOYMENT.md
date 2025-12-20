# AI BizWay - Deployment Guide

## Quick Deploy to Vercel (5 minutes)

### Step 1: Prepare Your Repository

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "AI BizWay initial deployment"

# Create GitHub repo and push
git remote add origin https://github.com/YOUR_USERNAME/aibizway.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

5. Add Environment Variables:
   ```
   ANTHROPIC_API_KEY=sk-ant-api03-xxx
   ```

6. Click "Deploy"

### Step 3: Verify Deployment

Once deployed, test each kit:
- AmplifAI
- OneShot
- Profit Engine
- AI Scout
- Launch Labs
- MailGlyder
- Repli-Clone
- MarketMind
- Content→Conversion
- BuzzShift

---

## Alternative: Deploy to Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub repository
4. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Functions directory**: Leave empty

5. Environment variables:
   ```
   ANTHROPIC_API_KEY=sk-ant-api03-xxx
   ```

6. Deploy

---

## Environment Variables Needed

| Variable | Description | Example |
|----------|-------------|---------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key | `sk-ant-api03-xxx` |
| `NEXT_PUBLIC_API_URL` | (Optional) Custom API URL | `https://aibizway.com` |

---

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Follow DNS configuration

---

## Performance Optimization

### Enable Edge Functions (Vercel)
Already optimized for Vercel Edge Runtime - no changes needed.

### Enable Image Optimization
Next.js automatically optimizes images. Add domains in `next.config.js` if using external images.

### Enable Caching
API responses are cached automatically. Adjust in `app/api/claude/route.ts` if needed.

---

## Monitoring & Analytics

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Custom Analytics
Integrate Google Analytics, PostHog, or your preferred analytics tool.

---

## Troubleshooting

### Build Errors

**"Module not found"**
```bash
npm install
npm run build
```

**"API route not found"**
- Verify `app/api/claude/route.ts` exists
- Check API key is set in environment variables

### Runtime Errors

**"Failed to fetch"**
- Check ANTHROPIC_API_KEY is set
- Verify API key is valid
- Check API rate limits

**"CORS errors"**
- Use server-side API routes (already implemented)
- Don't call Anthropic API from client-side

---

## Scaling Considerations

### API Rate Limits
- Anthropic API has rate limits
- Implement request queuing if needed
- Consider caching common responses

### Database Integration
If you need to store results:
1. Add Supabase/PlanetScale
2. Store generated content
3. Implement user authentication

### Payment Integration
To monetize:
1. Add Stripe
2. Implement kit access control
3. Create subscription tiers

---

## Security Best Practices

✅ **Already Implemented:**
- Environment variables for API keys
- Server-side API calls only
- No client-side API key exposure

🔒 **Additional Security:**
- Add rate limiting
- Implement user authentication
- Add CAPTCHA for public use
- Monitor API usage

---

## Maintenance

### Update Dependencies
```bash
npm update
```

### Update Next.js
```bash
npm install next@latest react@latest react-dom@latest
```

### Monitor API Usage
- Check Anthropic dashboard
- Set up usage alerts
- Track costs

---

## Support

For issues or questions:
1. Check the README.md
2. Review Vercel/Netlify docs
3. Check Anthropic API docs

---

**You're ready to deploy. Use the tool. Get the result.**
