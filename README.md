# AI BizWay - Complete Next.js Deployment

Professional Next.js app with all 10 AI BizWay kits integrated with Claude API.

## Kits Included

1. **AmplifAI** - Turn a spark into omnipresence
2. **OneShot** - Custom content creation engine
3. **Profit Engine** - Ideas to revenue systems
4. **AI Scout** - Agent perspective page audits
5. **Launch Labs** - Complete launch strategy
6. **MailGlyder** - Email infrastructure + automation
7. **Repli-Clone** - Niche-specific GPT cloning
8. **MarketMind** - Pre-build idea validation
9. **Content to Conversion** - Full digital marketing suite
10. **BuzzShift** - Trend-riding content creation

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file:

```bash
ANTHROPIC_API_KEY=your_anthropic_api_key_here
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/aibizway)

### Manual Deploy

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `ANTHROPIC_API_KEY`
   - Deploy

## Project Structure

```
aibizway/
├── app/
│   ├── api/
│   │   └── claude/
│   │       └── route.ts          # Claude API endpoint
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                  # Main page
├── components/
│   ├── KitNav.tsx               # Kit navigation
│   └── kits/
│       ├── AmplifAI.tsx
│       ├── OneShot.tsx
│       ├── ProfitEngine.tsx
│       ├── AIScout.tsx
│       ├── LaunchLabs.tsx
│       ├── MailGlyder.tsx
│       ├── RepliclOne.tsx
│       ├── MarketMind.tsx
│       ├── ContentToConversion.tsx
│       └── BuzzShift.tsx
├── lib/
│   └── claude.ts                # API utilities & prompts
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Features

- ✅ All 10 kits fully functional
- ✅ Claude Sonnet 4 integration
- ✅ Responsive design (mobile-first)
- ✅ Professional UI with AI BizWay branding
- ✅ Copy-to-clipboard functionality
- ✅ Loading states & error handling
- ✅ TypeScript throughout
- ✅ Vercel-ready deployment

## API Usage

Each kit calls the Claude API through `/api/claude`:

```typescript
const response = await callClaudeAPI(systemPrompt, userInput);
```

System prompts are defined in `lib/claude.ts` with specific instructions for each kit.

## Customization

### Change Branding Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  orange: {
    400: '#ff8c5a',  // Change these
    500: '#ff6b35',
    600: '#ff5722',
  },
}
```

### Add New Kit

1. Create component in `components/kits/`
2. Add system prompt in `lib/claude.ts`
3. Import in `app/page.tsx`
4. Add to kit navigation

## Performance

- Server-side API calls (no CORS issues)
- Optimized builds with SWC
- Automatic code splitting
- Production-ready caching

## Support

Built for MindMekka / AI BizWay

---

**Use the tool. Get the result.**
