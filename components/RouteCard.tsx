'use client';

import Link from 'next/link';
import type { RouteType, Accent } from '@/data/places';
import { RouteIcon } from './PlaceIcons';
import { ArrowRight, ClockIcon } from './PlaceIcons';

type Props = {
  type: RouteType;
  title: string;
  subtitle: string;
  accent: Accent;
  totalMin: number;
  stationCount: number;
  delayMs?: number;
};

const accentMap = {
  sage: {
    bg: 'bg-sage-100',
    ring: 'hover:ring-sage-300',
    text: 'text-sage-700',
    dot: 'bg-sage-500',
  },
  cream: {
    bg: 'bg-cream-100',
    ring: 'hover:ring-isa-200',
    text: 'text-isa-600',
    dot: 'bg-isa-400',
  },
  skysoft: {
    bg: 'bg-skysoft-100',
    ring: 'hover:ring-skysoft-300',
    text: 'text-skysoft-700',
    dot: 'bg-skysoft-500',
  },
  plum: {
    bg: 'bg-plum-100',
    ring: 'hover:ring-plum-300',
    text: 'text-plum-700',
    dot: 'bg-plum-500',
  },
  peach: {
    bg: 'bg-peach-100',
    ring: 'hover:ring-peach-300',
    text: 'text-peach-700',
    dot: 'bg-peach-500',
  },
} as const;

function formatMin(min: number) {
  if (min >= 60) {
    const h = Math.floor(min / 60);
    const m = min % 60;
    return m === 0 ? `${h} 小時` : `${h} 小時 ${m} 分`;
  }
  return `${min} 分鐘`;
}

export default function RouteCard({
  type,
  title,
  subtitle,
  accent,
  totalMin,
  stationCount,
  delayMs = 0,
}: Props) {
  const a = accentMap[accent];
  return (
    <Link
      href={`/route?type=${type}`}
      className={`group block rounded-3xl ${a.bg} p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float ring-2 ring-transparent ${a.ring} fade-in-up sm:p-6`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/80 p-2 shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <RouteIcon type={type} className="h-full w-full" />
        </div>
        <div className="min-w-0 flex-1">
          <div
            className={`flex items-center gap-1.5 text-sm font-semibold ${a.text}`}
          >
            <span className={`inline-block h-2 w-2 rounded-full ${a.dot}`} />
            今天的路線
          </div>
          <h3 className="font-kai mt-1 text-xl font-bold leading-tight text-ink-900 sm:text-2xl">
            {title}
          </h3>
          <p className="mt-1 text-sm text-ink-700 sm:text-base">{subtitle}</p>
          <div className="mt-2 flex items-center gap-3 text-sm font-medium text-ink-600">
            <span className="inline-flex items-center gap-1">
              <ClockIcon className="h-4 w-4" />
              {formatMin(totalMin)}
            </span>
            <span>{stationCount} 站</span>
          </div>
        </div>
        <ArrowRight className="h-6 w-6 shrink-0 text-ink-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink-700" />
      </div>
    </Link>
  );
}
