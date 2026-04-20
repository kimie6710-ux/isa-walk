'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import DogCharacter from '@/components/DogCharacter';
import MapView from '@/components/MapView';
import PlaceCard from '@/components/PlaceCard';
import PropertyCard from '@/components/PropertyCard';
import { getRoute, routeTotalMin } from '@/data/places';
import { getProperty } from '@/data/properties';
import { ClockIcon, RouteIcon } from '@/components/PlaceIcons';

function formatMin(min: number) {
  if (min >= 60) {
    const h = Math.floor(min / 60);
    const m = min % 60;
    return m === 0 ? `${h} 小時` : `${h} 小時 ${m} 分`;
  }
  return `${min} 分鐘`;
}

function RouteContent() {
  const sp = useSearchParams();
  const route = getRoute(sp.get('type'));
  const total = routeTotalMin(route);
  const progressColor =
    route.accent === 'sage'
      ? 'bg-sage-500'
      : route.accent === 'cream'
        ? 'bg-isa-400'
        : route.accent === 'skysoft'
          ? 'bg-skysoft-500'
          : route.accent === 'plum'
            ? 'bg-plum-500'
            : 'bg-peach-500';

  return (
    <main className="relative min-h-screen pb-4">
      <div className="mx-auto max-w-md px-6 py-8 sm:max-w-2xl sm:py-12">
        <div className="mb-4 flex items-center justify-between animate-fade-in">
          <Link
            href="/select"
            className="text-base font-medium text-ink-400 transition-colors hover:text-ink-700"
          >
            ← 換一條路線
          </Link>
          <div className="flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-sm font-semibold text-ink-700 shadow-soft">
            <RouteIcon type={route.type} className="h-4 w-4" />
            {route.title}
          </div>
        </div>

        <div className="mt-2 animate-fade-in">
          <DogCharacter size="md" message={route.isaIntro} />
        </div>

        {/* 路線總覽 */}
        <div className="mt-6 flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 shadow-soft animate-fade-in">
          <div className="flex items-center gap-2 text-sm font-medium text-ink-600">
            <ClockIcon className="h-4 w-4" />
            全程約 {formatMin(total)}
          </div>
          <div className="text-sm font-medium text-ink-600">
            {route.places.length} 站
          </div>
        </div>

        <div
          className="mt-6 animate-fade-in"
          style={{ animationDelay: '120ms' }}
        >
          <MapView places={route.places} accent={route.accent} />
        </div>

        <div className="mt-10">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="font-kai text-xl font-bold text-ink-900 sm:text-2xl">
              沿途這些地方
            </h2>
            <span className="text-sm font-medium text-ink-400">
              共 {route.places.length} 站 · {formatMin(total)}
            </span>
          </div>

          {/* 步行進度條 */}
          <div className="mb-8 h-3 overflow-hidden rounded-full bg-cream-100 walk-progress">
            <div
              className={`h-full rounded-full ${progressColor}`}
              style={{ width: '100%' }}
            />
          </div>

          <div className="space-y-5">
            {route.places.map((place, i) => {
              const step = i + 1;
              const pTotal = route.places.length;
              if (place.kind === 'property' && place.propertyId) {
                const property = getProperty(place.propertyId);
                if (property) {
                  return (
                    <PropertyCard
                      key={place.id}
                      property={property}
                      isaQuote={place.isaQuote}
                      step={step}
                      total={pTotal}
                      accent={route.accent}
                      delayMs={200 + i * 80}
                    />
                  );
                }
              }
              return (
                <PlaceCard
                  key={place.id}
                  place={place}
                  step={step}
                  total={pTotal}
                  delayMs={200 + i * 80}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-14 animate-fade-in">
          <DogCharacter
            size="sm"
            bubbleSide="right"
            message="走到這裡啦！要不要換一條路線試試？"
          />
          <div className="mt-5 flex gap-3">
            <Link
              href="/select"
              className="flex-1 rounded-2xl bg-white px-4 py-3.5 text-center text-base font-semibold text-ink-900 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-float"
            >
              換一條路線
            </Link>
            <Link
              href="/about"
              className="flex-1 rounded-2xl bg-ink-900 px-4 py-3.5 text-center text-base font-semibold text-cream-50 transition-all hover:-translate-y-0.5 hover:bg-ink-700"
            >
              關於伊薩
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function RoutePage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center">
          <div className="font-kai text-base text-ink-400">伊薩正在整理路線…</div>
        </main>
      }
    >
      <RouteContent />
    </Suspense>
  );
}
