'use client';

import { useState } from 'react';
import { callClaudeAPI, SYSTEM_PROMPTS } from '@/lib/claude';

export function AmplifAI() {
  const [seed, setSeed] = useState('');
  const [type, setType] = useState('Product');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleGenerate = async () => {
    if (!seed.trim()) {
      alert('Enter a seed first');
      return;
    }

    setLoading(true);
    setResult('');

    const userInput = `My spark: "${seed}"
Type: ${type}

Map the audience psychology and create platform-specific content frameworks.`;

    const response = await callClaudeAPI(SYSTEM_PROMPTS.amplifai, userInput);

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
        <h2 className="text-3xl font-bold text-orange-500 mb-2">AmplifAI</h2>
        <p className="text-gray-400">Take a spark. Forge omnipresence.</p>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            What's your spark?
          </label>
          <input
            type="text"
            value={seed}
            onChange={(e) => setSeed(e.target.value)}
            placeholder="Product, niche, pain point, or keyword"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition"
          >
            <option>Product</option>
            <option>Niche</option>
            <option>Pain Point</option>
            <option>Keyword</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={loading || !seed.trim()}
        className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-black font-bold py-4 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {loading ? 'Mapping Audience Psychology...' : 'Map Audience Psychology'}
      </button>

      {result && (
        <div className="mt-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-orange-500">Results</h3>
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
