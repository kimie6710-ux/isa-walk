'use client';

import { useMemo, useState } from 'react';
import type { Place, Accent } from '@/data/places';
import { KindIcon } from './PlaceIcons';

type Props = {
  places: Place[];
  accent: Accent;
};

const accentHex: Record<Accent, string> = {
  sage: '#6B9E5E',
  cream: '#D6A87A',
  skysoft: '#5E93A5',
  plum: '#9B6FA4',
  peach: '#E89A78',
};

const VB_W = 400;
const VB_H = 280;
const PAD = 40;

export default function MapView({ places, accent }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const points = useMemo(() => {
    if (places.length === 0) return [];
    const lats = places.map((p) => p.lat);
    const lngs = places.map((p) => p.lng);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLng = Math.min(...lngs);
    const maxLng = Math.max(...lngs);
    const dLat = maxLat - minLat || 0.001;
    const dLng = maxLng - minLng || 0.001;

    return places.map((p) => ({
      place: p,
      x: PAD + ((p.lng - minLng) / dLng) * (VB_W - PAD * 2),
      y: PAD + (1 - (p.lat - minLat) / dLat) * (VB_H - PAD * 2),
    }));
  }, [places]);

  const pathD = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
    .join(' ');

  const selectedPlace = selected
    ? places.find((p) => p.id === selected)
    : null;

  return (
    <div className="overflow-hidden rounded-3xl bg-[#EEEAE3] p-3 shadow-soft">
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="h-auto w-full"
        role="img"
        aria-label="路線地圖"
      >
        <defs>
          <pattern
            id="grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="#DED7C9"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width={VB_W} height={VB_H} fill="url(#grid)" />

        {/* 河のヒント */}
        <path
          d={`M 0 ${VB_H - 34} Q ${VB_W / 2} ${VB_H - 58} ${VB_W} ${VB_H - 22}`}
          fill="none"
          stroke="#CCD9DC"
          strokeWidth="22"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* 散歩ルート */}
        {points.length > 1 && (
          <path
            d={pathD}
            fill="none"
            stroke={accentHex[accent]}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="map-path-draw"
          />
        )}

        {/* 点位 */}
        {points.map((p, i) => {
          const isProperty = p.place.kind === 'property';
          const isSelected = selected === p.place.id;
          const r = isProperty ? 12 : 8;
          return (
            <g
              key={p.place.id}
              onClick={() => setSelected(p.place.id)}
              className="cursor-pointer map-dot-pop"
              style={{ animationDelay: `${200 + i * 120}ms` }}
            >
              <circle
                cx={p.x}
                cy={p.y}
                r={r + 7}
                fill="white"
                opacity={isSelected ? 0.9 : 0}
                className="transition-opacity duration-200"
              />
              <circle
                cx={p.x}
                cy={p.y}
                r={r}
                fill={isProperty ? accentHex[accent] : '#8A8275'}
                stroke="white"
                strokeWidth="2.5"
              />
              <text
                x={p.x}
                y={p.y + 3.5}
                textAnchor="middle"
                fontSize="11"
                fontWeight="700"
                fill="white"
                style={{ pointerEvents: 'none' }}
              >
                {i + 1}
              </text>
              {/* 房源星標 */}
              {isProperty && (
                <path
                  d={`M ${p.x} ${p.y - 20} l 2 4 l 4 1 l -3 3 l 1 4 l -4 -2 l -4 2 l 1 -4 l -3 -3 l 4 -1 z`}
                  fill={accentHex[accent]}
                  stroke="white"
                  strokeWidth="1"
                />
              )}
            </g>
          );
        })}
      </svg>

      <div className="mt-2 flex items-center justify-between px-2 text-xs font-medium sm:text-sm">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-ink-400">
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ background: '#8A8275' }}
            />
            景點
          </span>
          <span className="flex items-center gap-1.5 text-ink-700">
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ background: accentHex[accent] }}
            />
            房源
          </span>
        </div>
        <div className="text-ink-400">點圓點看詳情</div>
      </div>

      {selectedPlace && (
        <div className="mt-3 flex items-center justify-between gap-2 rounded-2xl bg-white px-4 py-3 shadow-soft animate-fade-in">
          <div className="flex items-center gap-3">
            <KindIcon
              kind={selectedPlace.kind}
              className="h-10 w-10 shrink-0"
            />
            <div>
              <div className="text-xs font-medium text-ink-400">選中的點</div>
              <div className="font-kai text-base font-semibold text-ink-900">
                {selectedPlace.name}
              </div>
            </div>
          </div>
          <button
            onClick={() => setSelected(null)}
            className="shrink-0 rounded-full bg-cream-100 px-3 py-1 text-xs font-medium text-ink-600 hover:bg-cream-200"
            aria-label="關閉"
          >
            關閉
          </button>
        </div>
      )}
    </div>
  );
}
