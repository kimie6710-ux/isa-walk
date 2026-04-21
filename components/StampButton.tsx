'use client';

import { PawPrint } from './IsaIllustration';

type Props = {
  collected: boolean;
  onClick: () => void;
  accent: 'sage' | 'cream' | 'skysoft' | 'plum' | 'peach';
};

const accentMap = {
  sage: { on: 'bg-sage-500 text-white', off: 'bg-white text-sage-700 ring-sage-300' },
  cream: { on: 'bg-isa-400 text-white', off: 'bg-white text-isa-600 ring-isa-200' },
  skysoft: { on: 'bg-skysoft-500 text-white', off: 'bg-white text-skysoft-700 ring-skysoft-300' },
  plum: { on: 'bg-plum-500 text-white', off: 'bg-white text-plum-700 ring-plum-300' },
  peach: { on: 'bg-peach-500 text-white', off: 'bg-white text-peach-700 ring-peach-300' },
} as const;

export default function StampButton({ collected, onClick, accent }: Props) {
  const a = accentMap[accent];
  return (
    <button
      onClick={onClick}
      aria-label={collected ? '已蓋章' : '蓋章'}
      aria-pressed={collected}
      className={`group relative inline-flex min-h-[44px] items-center gap-2 overflow-hidden rounded-full px-4 py-2.5 text-sm font-semibold shadow-soft ring-2 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${
        collected ? `${a.on} ring-transparent stamp-pop` : `${a.off}`
      }`}
    >
      <PawPrint className={`h-4 w-4 ${collected ? '' : 'opacity-60'}`} />
      {collected ? '已蓋章' : '我到這裡了'}
    </button>
  );
}
