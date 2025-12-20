// AI BizWay - Complete 10 Kits Dashboard
// Save this and import all 10 components into your main Next.js app

// ============================================
// 1. AmplifAI - Visibility Engineering
// ============================================
export const AmplifAI = () => {
  const [seed, setSeed] = useState('');
  const [output, setOutput] = useState('');

  return (
    <div className="p-6 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">AmplifAI</h2>
      <p className="text-gray-300 mb-4">Turn a single spark into omnipresence</p>
      <textarea
        placeholder="Give me a seed: product, niche, pain point, or keyword"
        value={seed}
        onChange={e => setSeed(e.target.value)}
        className="w-full p-3 bg-gray-900 border border-gray-700 rounded mb-4"
      />
      <button className="bg-orange-500 text-black font-bold py-2 px-6 rounded hover:bg-orange-400">
        Forge Omnipresence
      </button>
      {output && <div className="mt-4 p-3 bg-gray-900 rounded text-gray-300">{output}</div>}
    </div>
  );
};

// ============================================
// 2. OneShot - Custom Content Engine
// ============================================
export const OneShot = () => {
  const [businessDesc, setBusinessDesc] = useState('');
  const [output, setOutput] = useState('');

  return (
    <div className="p-6 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">OneShot</h2>
      <p className="text-gray-300 mb-4">Create custom content engine for your specific business</p>
      <textarea
        placeholder="Describe your business, niche, and target audience"
        value={businessDesc}
        onChange={e => setBusinessDesc(e.target.value)}
        className="w-full p-3 bg-gray-900 border border-gray-700 rounded mb-4"
      />
      <button className="bg-orange-500 text-black font-bold py-2 px-6 rounded hover:bg-orange-400">
        Generate Custom Engine
      </button>
      {output && <div className="mt-4 p-3 bg-gray-900 rounded text-gray-300">{output}</div>}
    </div>
  );
};

// ============================================
// 3. Profit Engine - Business Foundation
// ============================================
export const ProfitEngine = () => {
  const [productIdea, setProductIdea] = useState('');
  const [output, setOutput] = useState('');

  return (
    <div className="p-6 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">Profit Engine</h2>
      <p className="text-gray-300 mb-4">Turn ideas into revenue systems</p>
      <input
        type="text"
        placeholder="Describe your product idea"
        value={productIdea}
        onChange={e => setProductIdea(e.target.value)}
        className="w-full p-3 bg-gray-900 border border-gray-700 rounded mb-4"
      />
      <button className="bg-orange-500 text-black font-bold py-2 px-6 rounded hover:bg-orange-400">
        Build Profit System
      </button>
      {output && <div className="mt-4 p-3 bg-gray-900 rounded text-gray-300">{output}</div>}
    </div>
  );
};

// ============================================
// 4. AI Scout GPT - Agent Perspective Audit
// ============================================
export const AIScout = () => {
  const [pageUrl, setPageUrl] = useState('');
  const [output, setOutput] = useState('');

  return (
    <div className="p-6 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">AI Scout GPT</h2>
      <p className="text-gray-300 mb-4">See your page through AI agent eyes</p>
      <input
        type="text"
        placeholder="Paste your page URL"
        value={pageUrl}
        onChange={e => setPageUrl(e.target.value)}
        className="w-full p-3 bg-gray-900 border border-gray-700 rounded mb-4"
      />
      <button className="bg-orange-500 text-black font-bold py-2 px-6 rounded hover:bg-orange-400">
        Run Agent Audit
      </button>
      {output && <div className="mt-4 p-3 bg-gray-900 rounded text-gray-300">{output}</div>}
    </div>
  );
};

// ============================================
// 5. AI Launch Labs - Pre/During/Post Launch
// ============================================
export const LaunchLabs = () => {
  const [launchPhase, setLaunchPhase] = useState('pre');
  const [output, setOutput] = useState('');

  return (
    <div className="p-6 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">AI Launch Labs</h2>
      <p className="text-gray-300 mb-4">Complete launch specialist system</p>
      <select
        value={launchPhase}
        onChange={e => setLaunchPhase(e.target.value)}
        className="w-full p-3 bg-gray-900 border border-gray-700 rounded mb-4"
      >
        <option value="pre">Pre-Launch Strategy</option>
        <option value="during">During Launch</option>
        <option value="post">Post-Launch Optimization</option>
      </select>
      <button className="bg-orange-500 text-black font-bold py-2 px-6 rounded hover:bg-orange-400">
        Get Launch Plan
      </button>
      {output && <div className="mt-4 p-3 bg-gray-900 rounded text-gray-300">{output}</div>}
    </div>
  );
};

// ============================================
// 6. MailGlyder - Email Infrastructure
// ============================================
export const MailGlyder = () => {
  const [topic, setTopic] = useState('');
  const [output, setOutput] = useState('');

  return (
    <div className="p-6 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">MailGlyder</h2>
      <p className="text-gray-300 mb-4">AI newsletter creation + automated delivery</p>
      <textarea
        placeholder="What's your email about?"
        value={topic}
        onChange={e => setTopic(e.target.value)}
        className="w-full p-3 bg-gray-900 border border-gray-700 rounded mb-4"
      />
      <button className="bg-orange-500 text-black font-bold py-2 px-6 rounded hover:bg-orange-400">
        Generate Newsletter
      </button>
      {output && <div className="mt-4 p-3 bg-gray-900 rounded text-gray-300">{output}</div>}
    </div>
  );
};

// ============================================
// 7. Repli-Clone - GPT Cloning System
// ============================================
export const RepliclOne = () => {
  const [niche, setNiche] = useState('');
  const [output, setOutput] = useState('');

  return (
    <div className="p-6 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">Repli-Clone</h2>
      <p className="text-gray-300 mb-4">Create niche-specific GPTs instantly</p>
      <input
        type="text"
        placeholder="Enter your niche or industry"
        value={niche}
        onChange={e => setNiche(e.target.value)}
        className="w-full p-3 bg-gray-900 border border-gray-700 rounded mb-4"
      />
      <button className="bg-orange-500 text-black font-bold py-2 px-6 rounded hover:bg-orange-400">
        Clone & Customize
      </button>
      {output && <div className="mt-4 p-3 bg-gray-900 rounded text-gray-300">{output}</div>}
    </div>
  );
};

// ============================================
// 8. MarketMind - Idea Validation
// ============================================
export const MarketMind = () => {
  const [idea, setIdea] = useState('');
  const [output, setOutput] = useState('');

  return (
    <div className="p-6 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">MarketMind</h2>
      <p className="text-gray-300 mb-4">Validate ideas before you build</p>
      <textarea
        placeholder="Describe your business idea"
        value={idea}
        onChange={e => setIdea(e.target.value)}
        className="w-full p-3 bg-gray-900 border border-gray-700 rounded mb-4"
      />
      <button className="bg-orange-500 text-black font-bold py-2 px-6 rounded hover:bg-orange-400">
        Validate Idea
      </button>
      {output && <div className="mt-4 p-3 bg-gray-900 rounded text-gray-300">{output}</div>}
    </div>
  );
};

// ============================================
// 9. Content to Conversion - Marketing Suite
// ============================================
export const ContentToConversion = () => {
  const [topic, setTopic] = useState('');
  const [marketingType, setMarketingType] = useState('content');
  const [output, setOutput] = useState('');

  return (
    <div className="p-6 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">Content to Conversion</h2>
      <p className="text-gray-300 mb-4">Full digital marketing suite</p>
      <input
        type="text"
        placeholder="Enter your topic/product"
        value={topic}
        onChange={e => setTopic(e.target.value)}
        className="w-full p-3 bg-gray-900 border border-gray-700 rounded mb-4"
      />
      <select
        value={marketingType}
        onChange={e => setMarketingType(e.target.value)}
        className="w-full p-3 bg-gray-900 border border-gray-700 rounded mb-4"
      >
        <option value="content">Content Marketing</option>
        <option value="email">Email + List Building</option>
        <option value="social">Social Media</option>
        <option value="analytics">Analytics & Optimization</option>
      </select>
      <button className="bg-orange-500 text-black font-bold py-2 px-6 rounded hover:bg-orange-400">
        Generate Strategy
      </button>
      {output && <div className="mt-4 p-3 bg-gray-900 rounded text-gray-300">{output}</div>}
    </div>
  );
};

// ============================================
// Main Dashboard - All 10 Kits
// ============================================
export default function AIBizWayDashboard() {
  const [activeKit, setActiveKit] = useState('buzzshift');

  const kits = [
    { id: 'amplifai', name: 'AmplifAI', icon: '✨' },
    { id: 'oneshot', name: 'OneShot', icon: '🎯' },
    { id: 'profitengine', name: 'Profit Engine', icon: '💰' },
    { id: 'aiScout', name: 'AI Scout', icon: '👁️' },
    { id: 'launchlabs', name: 'Launch Labs', icon: '🚀' },
    { id: 'mailglyder', name: 'MailGlyder', icon: '✉️' },
    { id: 'repliclone', name: 'Repli-Clone', icon: '🧬' },
    { id: 'marketmind', name: 'MarketMind', icon: '🧠' },
    { id: 'contenttoconversion', name: 'Content→Conversion', icon: '📈' },
    { id: 'buzzshift', name: 'BuzzShift', icon: '⚡' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-black bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent mb-2">
            AI BizWay
          </h1>
          <p className="text-gray-400 text-lg">Use the tool. Get the result.</p>
        </div>

        {/* Kit Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {kits.map(kit => (
            <button
              key={kit.id}
              onClick={() => setActiveKit(kit.id)}
              className={`p-3 rounded-lg border-2 transition font-bold ${
                activeKit === kit.id
                  ? 'border-orange-500 bg-gray-800 text-orange-500'
                  : 'border-gray-700 hover:border-orange-500 text-gray-400'
              }`}
            >
              <span className="text-2xl block mb-1">{kit.icon}</span>
              <span className="text-xs">{kit.name}</span>
            </button>
          ))}
        </div>

        {/* Active Kit Display */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
          {activeKit === 'amplifai' && <AmplifAI />}
          {activeKit === 'oneshot' && <OneShot />}
          {activeKit === 'profitengine' && <ProfitEngine />}
          {activeKit === 'aiScout' && <AIScout />}
          {activeKit === 'launchlabs' && <LaunchLabs />}
          {activeKit === 'mailglyder' && <MailGlyder />}
          {activeKit === 'repliclone' && <RepliclOne />}
          {activeKit === 'marketmind' && <MarketMind />}
          {activeKit === 'contenttoconversion' && <ContentToConversion />}
          {activeKit === 'buzzshift' && <BuzzShift />}
        </div>
      </div>
    </div>
  );
}
