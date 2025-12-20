'use client';

import { useState } from 'react';
import { KitNav } from '@/components/KitNav';
import { AmplifAI } from '@/components/kits/AmplifAI';
import { OneShot } from '@/components/kits/OneShot';
import { ProfitEngine } from '@/components/kits/ProfitEngine';
import { AIScout } from '@/components/kits/AIScout';
import { LaunchLabs } from '@/components/kits/LaunchLabs';
import { MailGlyder } from '@/components/kits/MailGlyder';
import { RepliclOne } from '@/components/kits/RepliclOne';
import { MarketMind } from '@/components/kits/MarketMind';
import { ContentToConversion } from '@/components/kits/ContentToConversion';
import { BuzzShift } from '@/components/kits/BuzzShift';

export type KitId =
  | 'amplifai'
  | 'oneshot'
  | 'profitengine'
  | 'aiscout'
  | 'launchlabs'
  | 'mailglyder'
  | 'repliclone'
  | 'marketmind'
  | 'content2conversion'
  | 'buzzshift';

export default function Home() {
  const [activeKit, setActiveKit] = useState<KitId>('amplifai');

  const renderKit = () => {
    switch (activeKit) {
      case 'amplifai':
        return <AmplifAI />;
      case 'oneshot':
        return <OneShot />;
      case 'profitengine':
        return <ProfitEngine />;
      case 'aiscout':
        return <AIScout />;
      case 'launchlabs':
        return <LaunchLabs />;
      case 'mailglyder':
        return <MailGlyder />;
      case 'repliclone':
        return <RepliclOne />;
      case 'marketmind':
        return <MarketMind />;
      case 'content2conversion':
        return <ContentToConversion />;
      case 'buzzshift':
        return <BuzzShift />;
      default:
        return <AmplifAI />;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent mb-2">
            AI BizWay
          </h1>
          <p className="text-gray-400 text-lg">Use the tool. Get the result.</p>
        </div>

        {/* Kit Navigation */}
        <KitNav activeKit={activeKit} onKitChange={setActiveKit} />

        {/* Active Kit */}
        <div className="mt-8">{renderKit()}</div>
      </div>
    </main>
  );
}
