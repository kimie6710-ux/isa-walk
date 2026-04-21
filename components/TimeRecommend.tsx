'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { routes, type RouteType } from '@/data/places';
import { RouteIcon } from './PlaceIcons';

function pickRoute(hour: number): RouteType {
  if (hour >= 5 && hour < 10) return 'daily';
  if (hour >= 10 && hour < 14) return 'art';
  if (hour >= 14 && hour < 17) return 'relax';
  if (hour >= 17 && hour < 20) return 'view';
  if (hour >= 20 && hour < 23) return 'luxury';
  return 'commute';
}

function greetText(hour: number): { emoji: string; text: string } {
  if (hour >= 5 && hour < 11) return { emoji: '🌅', text: '早安～現在時間適合' };
  if (hour >= 11 && hour < 14) return { emoji: '🍱', text: '午後小憩，推薦' };
  if (hour >= 14 && hour < 18) return { emoji: '☁️', text: '下午好，要不要' };
  if (hour >= 18 && hour < 21) return { emoji: '🌇', text: '夕陽時刻，試試' };
  if (hour >= 21 && hour < 24) return { emoji: '🌙', text: '夜深了～適合' };
  return { emoji: '🌌', text: '這麼晚還在？陪你走' };
}

export default function TimeRecommend() {
  const [mounted, setMounted] = useState(false);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    setHour(new Date().getHours());
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const type = pickRoute(hour);
  const r = routes[type];
  const { emoji, text } = greetText(hour);

  return (
    <Link
      href={`/route?type=${type}`}
      className="mt-8 flex max-w-sm items-center gap-3 rounded-3xl bg-white/85 p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float fade-in-up"
      style={{ animationDelay: '800ms' }}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cream-100 p-1.5">
        <RouteIcon type={type} className="h-full w-full" />
      </div>
      <div className="min-w-0 flex-1 text-left">
        <div className="flex items-center gap-1 text-xs font-semibold text-ink-400">
          <span>{emoji}</span>
          {text}
        </div>
        <div className="font-kai mt-0.5 truncate text-lg font-bold text-ink-900">
          {r.title}
        </div>
        <div className="mt-0.5 truncate text-xs text-ink-600">{r.subtitle}</div>
      </div>
      <div className="text-xl text-ink-400">→</div>
    </Link>
  );
}
