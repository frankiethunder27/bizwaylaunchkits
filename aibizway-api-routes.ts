// pages/api/kits/[kitName].ts
// Claude API integration for all 10 kits

import { Anthropic } from '@anthropic-ai/sdk';
import type { NextApiRequest, NextApiResponse } from 'next';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

type ResponseData = {
  success: boolean;
  data?: string;
  error?: string;
};

const kitPrompts = {
  amplifai: `You are AmplifAI - a visibility engineering system. 
    Take the user's spark (product, niche, pain point, keyword) and forge it into omnipresence.
    Generate:
    1. Audience psychology mapping (pains, desires, myths, triggers)
    2. Content angles and hooks for maximum attention
    3. Platform-specific content frameworks (LinkedIn, X, Instagram, TikTok, YouTube, Email)
    4. Content calendar structure
    5. Repurposing system for consistency
    Output should be actionable and ready to implement.`,

  oneshot: `You are OneShot - a custom content creation engine builder.
    Create a completely custom content engine specifically for the user's business.
    Generate:
    1. Business profile (niche, audience, unique value)
    2. Content pillars specific to their business
    3. Content templates they can reuse
    4. Voice and tone guidelines
    5. Quick-start content ideas
    Make it feel like the engine was built just for them.`,

  profitengine: `You are the Profit Engine - turning ideas into revenue systems.
    For the user's product idea, generate:
    1. Market validation questions
    2. Audience targeting strategy
    3. Pricing model recommendations
    4. Sales funnel structure
    5. Revenue optimization tactics
    6. Customer acquisition strategy
    Focus on practical, implementable steps.`,

  aiscout: `You are AI Scout - see pages through AI agent eyes.
    Audit the page by analyzing:
    1. What AI agents "see" when scanning
    2. Copy clarity and relevance signals
    3. Structural issues blocking visibility
    4. Missing elements that impact discoverability
    5. Specific fixes with priority ranking
    Provide actionable improvements agents will reward.`,

  launchlabs: `You are Launch Labs - complete launch specialist.
    For the user's product, generate comprehensive launch strategy:
    1. Pre-launch checklist and timeline
    2. During-launch tactical execution
    3. Post-launch optimization and scaling
    4. Email campaign sequence
    5. Press/PR angles
    6. Community building tactics
    Cover all phases with specific, implementable actions.`,

  mailglyder: `You are MailGlyder - email infrastructure specialist.
    Create a complete email strategy and content:
    1. Newsletter structure and cadence
    2. 4-week email content outline
    3. Automated delivery sequences
    4. Subject line variations for testing
    5. Segmentation strategy
    6. Monetization angles if applicable
    Output ready-to-send email templates.`,

  repliclone: `You are Repli-Clone - GPT cloning and customization engine.
    For the user's niche, generate:
    1. GPT persona and system prompt
    2. Knowledge base requirements
    3. Custom instructions for the niche
    4. Conversation starters
    5. Output templates
    6. Differentiation from generic GPTs
    Make it feel completely custom to their niche.`,

  marketmind: `You are MarketMind - idea validation specialist.
    Evaluate the user's business idea:
    1. Market size and opportunity assessment
    2. Competition analysis
    3. Customer pain point validation
    4. Revenue model feasibility
    5. Time to market realistic timeline
    6. Key risks and mitigation strategies
    7. Go/No-Go recommendation with reasoning
    Be honest and specific - not generic.`,

  contenttoconversion: `You are Content to Conversion - full digital marketing suite.
    Based on the user's topic/product and marketing type, generate:
    1. Content strategy framework
    2. 30-day content calendar
    3. Email nurture sequence
    4. Social media posting strategy
    5. Analytics metrics to track
    6. Conversion optimization tactics
    7. A/B testing framework
    Comprehensive, actionable, and integrated.`,

  buzzshift: `You are BuzzShift AI - trend-riding content specialist.
    Given a trend, generate:
    1. Multiple content angles for the trend
    2. Platform-specific adaptations
    3. Hook variations for testing
    4. CTA recommendations
    5. Timing strategy (when to post)
    6. Repurposing opportunities
    7. Risk assessment
    Make content viral-ready while on-brand.`,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { kitName, input } = req.body;

  if (!kitName || !input) {
    return res.status(400).json({ success: false, error: 'Missing kitName or input' });
  }

  const kitKey = kitName.toLowerCase();
  const systemPrompt = kitPrompts[kitKey as keyof typeof kitPrompts];

  if (!systemPrompt) {
    return res.status(400).json({ success: false, error: `Unknown kit: ${kitName}` });
  }

  try {
    const message = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 2048,
      messages: [
        {
          role: 'user',
          content: input,
        },
      ],
      system: systemPrompt,
    });

    const responseText =
      message.content[0].type === 'text' ? message.content[0].text : 'No response generated';

    res.status(200).json({ success: true, data: responseText });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ success: false, error: errorMessage });
  }
}

// pages/api/kits/list.ts
// Get list of all available kits

export async function getAvailableKits() {
  return [
    {
      id: 'amplifai',
      name: 'AmplifAI',
      description: 'Turn a spark into omnipresence',
      icon: '✨',
      price: '$199',
    },
    {
      id: 'oneshot',
      name: 'OneShot',
      description: 'Custom content creation engine',
      icon: '🎯',
      price: '$199',
    },
    {
      id: 'profitengine',
      name: 'Profit Engine',
      description: 'Ideas to revenue systems',
      icon: '💰',
      price: '$199',
    },
    {
      id: 'aiscout',
      name: 'AI Scout GPT',
      description: 'Agent perspective page audits',
      icon: '👁️',
      price: '$199',
    },
    {
      id: 'launchlabs',
      name: 'AI Launch Labs',
      description: 'Complete launch strategy',
      icon: '🚀',
      price: '$199',
    },
    {
      id: 'mailglyder',
      name: 'MailGlyder',
      description: 'Email infrastructure + automation',
      icon: '✉️',
      price: '$199',
    },
    {
      id: 'repliclone',
      name: 'Repli-Clone',
      description: 'Niche-specific GPT cloning',
      icon: '🧬',
      price: '$199',
    },
    {
      id: 'marketmind',
      name: 'MarketMind',
      description: 'Pre-build idea validation',
      icon: '🧠',
      price: '$199',
    },
    {
      id: 'contenttoconversion',
      name: 'Content to Conversion',
      description: 'Full digital marketing suite',
      icon: '📈',
      price: '$199',
    },
    {
      id: 'buzzshift',
      name: 'BuzzShift AI',
      description: 'Trend-riding content creation',
      icon: '⚡',
      price: '$199',
    },
  ];
}

// pages/api/auth/[...nextauth].ts
// NextAuth configuration for user authentication

import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Replace with your actual auth logic
        if (credentials?.email && credentials?.password) {
          return {
            id: '1',
            email: credentials.email,
            name: 'User',
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);

// pages/api/checkout.ts
// Stripe payment integration

import Stripe from 'stripe';
import type { NextApiRequest, NextApiResponse } from 'next';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { kitName, priceId, email } = req.body;

      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        customer_email: email,
        success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
        metadata: {
          kitName,
        },
      });

      res.status(200).json({ sessionId: session.id });
    } catch (error) {
      res.status(500).json({ error: 'Checkout failed' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
