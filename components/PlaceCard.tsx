'use client';

import type { Place } from '@/data/places';
import { IsaIcon } from './IsaIllustration';
import { KindIcon, WalkIcon, ClockIcon } from './PlaceIcons';

type Props = {
  place: Place;
  step: number;
  total: number;
  delayMs?: number;
};

const kindLabel: Record<Place['kind'], string> = {
  park: '公園',
  cafe: '咖啡',
  breakfast: '早餐',
  market: '市場',
  mrt: '捷運',
  bookstore: '書店',
  property: '房源',
};

function formatMin(min?: number) {
  if (!min) return null;
  if (min >= 60) {
    const h = Math.floor(min / 60);
    const m = min % 60;
    return m === 0 ? `${h} 小時` : `${h} 小時 ${m} 分`;
  }
  return `${min} 分鐘`;
}

export default function PlaceCard({ place, step, total, delayMs = 0 }: Props) {
  const stay = formatMin(place.stayMin);
  const walk = formatMin(place.walkFromMin);

  return (
    <div
      className="relative fade-in-up"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {step < total && (
        <div
          aria-hidden
          className="absolute left-[34px] top-[72px] -z-0 h-full w-px border-l-2 border-dashed border-cream-300"
        />
      )}

      {walk && step > 1 && (
        <div className="mb-2 ml-[80px] inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-ink-600 shadow-soft sm:text-sm">
          <WalkIcon className="h-3.5 w-3.5" />
          步行 {walk}
        </div>
      )}

      <div className="relative z-10 flex items-start gap-4">
        <div className="flex h-[68px] w-[68px] shrink-0 flex-col items-center justify-center rounded-2xl bg-white p-2 shadow-soft">
          <KindIcon kind={place.kind} className="h-9 w-9" />
          <span className="text-[10px] font-bold text-ink-400">
            {step}/{total}
          </span>
        </div>

        <div className="flex-1 rounded-2xl bg-white/80 px-5 py-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-float">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-cream-100 px-2.5 py-1 text-xs font-semibold text-ink-700">
              {kindLabel[place.kind]}
            </span>
            {stay && (
              <span className="inline-flex items-center gap-1 rounded-full bg-isa-100 px-2.5 py-1 text-xs font-semibold text-isa-600">
                <ClockIcon className="h-3 w-3" />
                停留 {stay}
              </span>
            )}
          </div>
          <h4 className="font-kai mt-2 text-xl font-semibold leading-tight text-ink-900 sm:text-2xl">
            {place.name}
          </h4>

          <p className="mt-2 text-base leading-relaxed text-ink-600">
            {place.description}
          </p>

          {place.isaQuote && (
            <div className="mt-3 flex items-start gap-2 rounded-xl bg-isa-100 px-3 py-2.5">
              <IsaIcon className="mt-0.5 h-6 w-6 shrink-0" />
              <p className="font-kai text-base italic text-isa-600">
                「{place.isaQuote}」
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
