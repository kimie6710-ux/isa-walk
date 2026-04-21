'use client';

import type { Place, Accent } from '@/data/places';
import { IsaIcon } from './IsaIllustration';
import { KindIcon, WalkIcon, ClockIcon } from './PlaceIcons';
import StampButton from './StampButton';

type Props = {
  place: Place;
  step: number;
  total: number;
  accent: Accent;
  collected: boolean;
  onToggleStamp: () => void;
  selected?: boolean;
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

export default function PlaceCard({
  place,
  step,
  total,
  accent,
  collected,
  onToggleStamp,
  selected = false,
  delayMs = 0,
}: Props) {
  const stay = formatMin(place.stayMin);
  const walk = formatMin(place.walkFromMin);

  return (
    <div
      id={`place-${place.id}`}
      className={`relative scroll-mt-24 fade-in-up transition-all duration-300 ${
        selected ? 'ring-2 ring-isa-400 rounded-3xl shadow-float -translate-y-0.5' : ''
      }`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {step < total && (
        <div
          aria-hidden
          className="absolute left-[36px] top-[76px] -z-0 h-full w-px border-l-2 border-dashed border-cream-300"
        />
      )}

      {walk && step > 1 && (
        <div className="mb-3 ml-[84px] inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-sm font-semibold text-ink-700 shadow-soft">
          <WalkIcon className="h-4 w-4" />
          步行 {walk}
        </div>
      )}

      <div className="relative z-10 flex items-start gap-4">
        <div className={`flex h-[72px] w-[72px] shrink-0 flex-col items-center justify-center rounded-2xl p-2 shadow-soft transition-colors ${
          collected ? 'bg-isa-200' : 'bg-white'
        }`}>
          <KindIcon kind={place.kind} className="h-10 w-10" />
          <span className="text-xs font-bold text-ink-700">
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

          {place.address && (
            <div className="mt-0.5 text-sm text-ink-600">{place.address}</div>
          )}

          <p className="mt-2 text-base leading-relaxed text-ink-700">
            {place.description}
          </p>

          {place.notable && (
            <p className="mt-1.5 text-sm text-ink-600">
              <span className="font-semibold">特色：</span>
              {place.notable}
            </p>
          )}

          {place.isaQuote && (
            <div className="mt-3 flex items-start gap-2 rounded-xl bg-isa-100 px-3 py-2.5">
              <IsaIcon className="mt-0.5 h-6 w-6 shrink-0" />
              <p className="font-kai text-base italic text-isa-600">
                「{place.isaQuote}」
              </p>
            </div>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <StampButton
              collected={collected}
              onClick={onToggleStamp}
              accent={accent}
            />
            {place.googleMapsUrl && (
              <a
                href={place.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-skysoft-100 px-4 py-2.5 text-sm font-semibold text-skysoft-700 transition-all hover:-translate-y-0.5 hover:bg-skysoft-300/60 active:scale-95"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M10 2 C 6 2 3 5 3 9 C 3 14 10 18 10 18 C 10 18 17 14 17 9 C 17 5 14 2 10 2 Z" />
                  <circle cx="10" cy="9" r="2.5" />
                </svg>
                Google 地圖
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
