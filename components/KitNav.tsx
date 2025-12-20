import { KitId } from '@/app/page';

interface Kit {
  id: KitId;
  name: string;
  shortName: string;
}

const kits: Kit[] = [
  { id: 'amplifai', name: 'AmplifAI', shortName: 'AmplifAI' },
  { id: 'oneshot', name: 'OneShot', shortName: 'OneShot' },
  { id: 'profitengine', name: 'Profit Engine', shortName: 'Profit' },
  { id: 'aiscout', name: 'AI Scout', shortName: 'Scout' },
  { id: 'launchlabs', name: 'Launch Labs', shortName: 'Launch' },
  { id: 'mailglyder', name: 'MailGlyder', shortName: 'Mail' },
  { id: 'repliclone', name: 'Repli-Clone', shortName: 'Clone' },
  { id: 'marketmind', name: 'MarketMind', shortName: 'Market' },
  { id: 'content2conversion', name: 'Content→Conv', shortName: 'Content' },
  { id: 'buzzshift', name: 'BuzzShift', shortName: 'Buzz' },
];

interface KitNavProps {
  activeKit: KitId;
  onKitChange: (kit: KitId) => void;
}

export function KitNav({ activeKit, onKitChange }: KitNavProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 bg-gray-800/50 p-4 rounded-xl border border-gray-700">
      {kits.map((kit) => (
        <button
          key={kit.id}
          onClick={() => onKitChange(kit.id)}
          className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
            activeKit === kit.id
              ? 'bg-orange-500 text-black border-2 border-orange-400'
              : 'bg-transparent text-gray-400 border-2 border-gray-700 hover:border-orange-500 hover:text-orange-400'
          }`}
        >
          <span className="hidden sm:inline">{kit.name}</span>
          <span className="sm:hidden">{kit.shortName}</span>
        </button>
      ))}
    </div>
  );
}
