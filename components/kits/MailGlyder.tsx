'use client';

import { useState } from 'react';
import { callClaudeAPI, SYSTEM_PROMPTS } from '@/lib/claude';

export function MailGlyder() {
  const [topic, setTopic] = useState('');
  const [frequency, setFrequency] = useState('Weekly');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleGenerate = async () => {
    if (!topic.trim()) {
      alert('Enter newsletter topic');
      return;
    }

    setLoading(true);
    setResult('');

    const userInput = `Newsletter Topic: ${topic}
Frequency: ${frequency}

Create a complete email campaign strategy and content.`;

    const response = await callClaudeAPI(SYSTEM_PROMPTS.mailglyder, userInput);

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
        <h2 className="text-3xl font-bold text-orange-500 mb-2">MailGlyder</h2>
        <p className="text-gray-400">AI newsletter + automation</p>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Newsletter Topic
          </label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="What's your newsletter about?"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Frequency
          </label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition"
          >
            <option>Daily</option>
            <option>Weekly</option>
            <option>Bi-weekly</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={loading || !topic.trim()}
        className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-black font-bold py-4 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {loading ? 'Generating Email Series...' : 'Generate Email Series'}
      </button>

      {result && (
        <div className="mt-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-orange-500">Email Campaign</h3>
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
