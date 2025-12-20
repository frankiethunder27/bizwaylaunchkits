'use client';

import { useState } from 'react';
import { callClaudeAPI, SYSTEM_PROMPTS } from '@/lib/claude';

export function BuzzShift() {
  const [trend, setTrend] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleGenerate = async () => {
    if (!trend.trim()) {
      alert('Enter a current trend');
      return;
    }

    setLoading(true);
    setResult('');

    const userInput = `Current Trend: ${trend}

Generate platform-specific content that rides this trend effectively.`;

    const response = await callClaudeAPI(SYSTEM_PROMPTS.buzzshift, userInput);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      setResult(`Error: ${response.error || 'Failed to generate content'}`);
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-orange-500 mb-2">BuzzShift</h2>
        <p className="text-gray-400">Trend-riding content creation</p>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Current Trend
          </label>
          <input
            type="text"
            value={trend}
            onChange={(e) => setTrend(e.target.value)}
            placeholder="E.g., AI burnout, No-meet November"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
          />
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={loading || !trend.trim()}
        className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-black font-bold py-4 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {loading ? 'Generating Platform Content...' : 'Generate Platform Content'}
      </button>

      {result && (
        <div className="mt-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-orange-500">Platform-Specific Content</h3>
            <button
              onClick={() => navigator.clipboard.writeText(result)}
              className="text-sm text-gray-400 hover:text-orange-500 transition"
            >
              Copy
            </button>
          </div>
          <div className="prose prose-invert max-w-none">
            <pre className="whitespace-pre-wrap text-sm text-gray-300 font-mono leading-relaxed">
              {result}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
