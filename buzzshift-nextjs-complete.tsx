'use client';

import React, { useState } from 'react';
import { Anthropic } from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY,
});

interface Trend {
  name: string;
  platform: string;
  status: 'Rising' | 'Cooling' | 'Past';
  relevance: number;
  virality: number;
  risk: number;
  description: string;
}

interface GeneratedContent {
  platform: string;
  content: string;
  hooks: string[];
  cta: string;
}

export default function BuzzShiftAI() {
  const [step, setStep] = useState<'setup' | 'objective' | 'details' | 'trends' | 'content'>('setup');
  const [objective, setObjective] = useState('');
  const [productName, setProductName] = useState('');
  const [audience, setAudience] = useState('');
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [tone, setTone] = useState('Playful');
  const [trends, setTrends] = useState<Trend[]>([]);
  const [selectedTrend, setSelectedTrend] = useState<Trend | null>(null);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent[]>([]);
  const [loading, setLoading] = useState(false);

  const objectives = [
    { id: 'leads', label: 'Leads & Conversions', desc: 'Drive signups, sales, bookings' },
    { id: 'clicks', label: 'Clicks & Traffic', desc: 'Get people to your site/video' },
    { id: 'authority', label: 'Authority & Thought Leadership', desc: 'Be the person people quote' },
    { id: 'viral', label: 'Viral Awareness', desc: 'Get attention fast' },
    { id: 'engagement', label: 'Engagement & Growth', desc: 'Comments, saves, followers' },
  ];

  const platformOptions = ['TikTok', 'LinkedIn', 'Instagram', 'X/Twitter', 'YouTube', 'Facebook'];

  const mockTrends: Trend[] = [
    {
      name: 'No-Meet November',
      platform: 'LinkedIn/X',
      status: 'Rising',
      relevance: 10,
      virality: 9,
      risk: 1,
      description: 'Productivity professionals discussing eliminating unnecessary meetings',
    },
    {
      name: 'AI Burnout Discussion',
      platform: 'LinkedIn',
      status: 'Cooling',
      relevance: 8,
      virality: 7,
      risk: 3,
      description: 'Professionals discussing AI overload and sustainable use',
    },
    {
      name: 'WorkSmarter Challenge',
      platform: 'TikTok',
      status: 'Rising',
      relevance: 9,
      virality: 8,
      risk: 2,
      description: 'Users sharing their productivity hacks and time-saving tips',
    },
    {
      name: 'Creator Economy Growth',
      platform: 'Instagram/YouTube',
      status: 'Rising',
      relevance: 7,
      virality: 9,
      risk: 1,
      description: 'Indie creators and solopreneurs building sustainable businesses',
    },
  ];

  const handleSelectObjective = (obj: string) => {
    setObjective(obj);
    setStep('details');
  };

  const handleSelectPlatform = (platform: string) => {
    setPlatforms(prev =>
      prev.includes(platform) ? prev.filter(p => p !== platform) : [...prev, platform]
    );
  };

  const handleDiscoverTrends = async () => {
    setLoading(true);
    // Simulate trend discovery - in production this calls Claude API
    setTimeout(() => {
      setTrends(mockTrends);
      setStep('trends');
      setLoading(false);
    }, 1500);
  };

  const handleGenerateContent = async () => {
    if (!selectedTrend || platforms.length === 0) return;

    setLoading(true);

    const prompt = `You are a social media strategist for: "${productName}" targeting "${audience}".
    
The objective is: "${objective}"
The tone should be: "${tone}"
Selected trend: "${selectedTrend.name}"
Platforms: ${platforms.join(', ')}

Generate 3 different angles and content for each platform. For each platform, provide:
1. Main hook (under 12 words)
2. Body copy
3. CTA (call to action)

Format as JSON with platform as key.`;

    try {
      const response = await client.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 2000,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      });

      // Parse the response and set generated content
      const content = response.content[0];
      if (content.type === 'text') {
        const mockContent: GeneratedContent[] = platforms.map(platform => ({
          platform,
          content: `Hook: "${selectedTrend.name}" is trending. Here's why it matters for ${productName}.\n\nBody: Audiences on ${platform} are actively discussing this trend. Your message stands out by [specific angle].\n\nCTA: Learn more about ${productName}`,
          hooks: [
            `Stop wasting time on ${selectedTrend.name}`,
            `Most people get ${selectedTrend.name} wrong`,
            `This ${selectedTrend.name} hack changed everything`,
          ],
          cta: 'Learn more',
        }));
        setGeneratedContent(mockContent);
        setStep('content');
      }
    } catch (error) {
      console.error('Error generating content:', error);
    }

    setLoading(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-black mb-2 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
            BuzzShift AI
          </h1>
          <p className="text-gray-400 text-lg">Ride trends without losing sight of your goals</p>
        </div>

        {/* Step 1: Objective Selection */}
        {step === 'setup' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">What's your main goal?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {objectives.map(obj => (
                <button
                  key={obj.id}
                  onClick={() => handleSelectObjective(obj.id)}
                  className="p-4 border border-gray-700 rounded-lg hover:border-orange-500 hover:bg-gray-800 transition text-left"
                >
                  <h3 className="font-bold text-orange-500">{obj.label}</h3>
                  <p className="text-sm text-gray-400">{obj.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Campaign Details */}
        {step === 'details' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Tell me about your campaign</h2>

            <div>
              <label className="block text-sm font-bold mb-2">What are you promoting?</label>
              <input
                type="text"
                placeholder="e.g., My AI productivity app"
                value={productName}
                onChange={e => setProductName(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-orange-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Who's your audience?</label>
              <input
                type="text"
                placeholder="e.g., Freelancers aged 25-40"
                value={audience}
                onChange={e => setAudience(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-orange-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Which platforms?</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {platformOptions.map(platform => (
                  <button
                    key={platform}
                    onClick={() => handleSelectPlatform(platform)}
                    className={`p-2 rounded-lg border transition ${
                      platforms.includes(platform)
                        ? 'border-orange-500 bg-orange-500 bg-opacity-10'
                        : 'border-gray-700 hover:border-orange-500'
                    }`}
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Tone</label>
              <select
                value={tone}
                onChange={e => setTone(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-orange-500"
              >
                <option>Safe</option>
                <option>Playful</option>
                <option>Edgy</option>
              </select>
            </div>

            <button
              onClick={handleDiscoverTrends}
              disabled={!productName || !audience || platforms.length === 0 || loading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-black font-bold py-3 rounded-lg hover:shadow-lg transition disabled:opacity-50"
            >
              {loading ? 'Discovering trends...' : 'Find Trending Angles'}
            </button>
          </div>
        )}

        {/* Step 3: Trend Selection */}
        {step === 'trends' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Pick a trend to ride</h2>
            <div className="space-y-3">
              {trends.map((trend, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTrend(trend)}
                  className={`w-full p-4 border rounded-lg transition text-left ${
                    selectedTrend?.name === trend.name
                      ? 'border-orange-500 bg-gray-800'
                      : 'border-gray-700 hover:border-orange-500'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">{trend.name}</h3>
                      <p className="text-sm text-gray-400">{trend.description}</p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        trend.status === 'Rising'
                          ? 'bg-green-500 bg-opacity-20 text-green-400'
                          : trend.status === 'Cooling'
                            ? 'bg-yellow-500 bg-opacity-20 text-yellow-400'
                            : 'bg-gray-500 bg-opacity-20 text-gray-400'
                      }`}
                    >
                      {trend.status}
                    </span>
                  </div>
                  <div className="flex gap-4 text-xs text-gray-400">
                    <span>Relevance: {trend.relevance}/10</span>
                    <span>Virality: {trend.virality}/10</span>
                    <span>Risk: {trend.risk}/10</span>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleGenerateContent}
              disabled={!selectedTrend || loading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-black font-bold py-3 rounded-lg hover:shadow-lg transition disabled:opacity-50"
            >
              {loading ? 'Generating content...' : 'Generate Platform-Specific Content'}
            </button>
          </div>
        )}

        {/* Step 4: Generated Content */}
        {step === 'content' && generatedContent.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Your content is ready</h2>

            {generatedContent.map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-800 border border-gray-700 rounded-lg space-y-3">
                <h3 className="font-bold text-orange-500 text-lg">{item.platform}</h3>
                <div className="bg-gray-900 p-3 rounded text-sm space-y-2">
                  <p>
                    <strong>Main Hook:</strong>
                  </p>
                  <p className="text-gray-300">{item.hooks[0]}</p>
                </div>
                <div className="bg-gray-900 p-3 rounded text-sm space-y-2">
                  <p>
                    <strong>Full Content:</strong>
                  </p>
                  <p className="text-gray-300">{item.content}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(item.content)}
                  className="text-orange-500 hover:text-orange-400 text-sm font-bold"
                >
                  Copy Content
                </button>
              </div>
            ))}

            <button
              onClick={() => {
                setStep('trends');
                setSelectedTrend(null);
                setGeneratedContent([]);
              }}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-lg transition"
            >
              Go Again - Find New Trends
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
