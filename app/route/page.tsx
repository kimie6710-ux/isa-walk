'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import DogCharacter from '@/components/DogCharacter';
import MapView from '@/components/MapView';
import PlaceCard from '@/components/PlaceCard';
import PropertyCard from '@/components/PropertyCard';
import PlaceCardSkeleton from '@/components/PlaceCardSkeleton';
import { getRoute, routeOrder, routeTotalMin } from '@/data/places';
import { getProperty } from '@/data/properties';
import { ClockIcon, RouteIcon } from '@/components/PlaceIcons';
import { PawPrint, Sparkle } from '@/components/IsaIllustration';
import { useStamps } from '@/lib/stamps';

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
  const router = useRouter();
  const route = getRoute(sp.get('type'));
  const total = routeTotalMin(route);
  const stationCount = route.places.length;

  const { has, toggle, mounted } = useStamps(route.type);
  const collectedCount = mounted
    ? route.places.filter((p) => has(p.id)).length
    : 0;
  const pct = (collectedCount / stationCount) * 100;
  const completed = mounted && collectedCount === stationCount;

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [justCelebrated, setJustCelebrated] = useState(false);
  const prevCompletedRef = useRef(false);

  // 地圖の點が選択されたらカードにスクロール
  useEffect(() => {
    if (selectedId) {
      const el = document.getElementById(`place-${selectedId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      const t = setTimeout(() => setSelectedId(null), 2200);
      return () => clearTimeout(t);
    }
  }, [selectedId]);

  // 完歩時の祝賀
  useEffect(() => {
    if (completed && !prevCompletedRef.current) {
      setJustCelebrated(true);
      const t = setTimeout(() => setJustCelebrated(false), 4500);
      prevCompletedRef.current = true;
      return () => clearTimeout(t);
    }
    if (!completed) prevCompletedRef.current = false;
  }, [completed]);

  // Swipe 左右で路線切替
  const startX = useRef(0);
  const startY = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    const dy = e.changedTouches[0].clientY - startY.current;
    if (Math.abs(dx) < 80) return;
    if (Math.abs(dy) > Math.abs(dx)) return; // 縦スクロール優先
    const idx = routeOrder.indexOf(route.type);
    const next =
      dx < 0
        ? routeOrder[(idx + 1) % routeOrder.length]
        : routeOrder[(idx - 1 + routeOrder.length) % routeOrder.length];
    router.push(`/route?type=${next}`);
  };

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
    <main
      className="relative min-h-screen pb-4"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="mx-auto max-w-md px-6 py-8 sm:max-w-2xl sm:py-12">
        <div className="mb-4 flex items-center justify-between animate-fade-in">
          <Link
            href="/select"
            className="text-base font-medium text-ink-600 transition-colors hover:text-ink-900"
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

        {/* 路線總覽 + スタンプ進捗 */}
        <div className="mt-6 rounded-2xl bg-white/85 p-4 shadow-soft animate-fade-in">
          <div className="flex items-center justify-between text-sm font-semibold text-ink-700">
            <span className="flex items-center gap-1.5">
              <ClockIcon className="h-4 w-4" />
              全程約 {formatMin(total)} · {stationCount} 站
            </span>
            <span className="flex items-center gap-1 text-isa-600">
              <PawPrint className="h-4 w-4" />
              {mounted ? `${collectedCount}/${stationCount}` : `0/${stationCount}`}
            </span>
          </div>
          <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-cream-100">
            <div
              className={`h-full rounded-full ${progressColor} transition-all duration-500`}
              style={{ width: `${pct}%` }}
            />
          </div>
          {mounted && collectedCount > 0 && !completed && (
            <div className="mt-2 text-xs font-medium text-ink-600">
              還差 {stationCount - collectedCount} 站就集滿今日腳印～
            </div>
          )}
        </div>

        <div
          className="mt-6 animate-fade-in"
          style={{ animationDelay: '120ms' }}
        >
          <MapView
            places={route.places}
            accent={route.accent}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        <div className="mt-10">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="font-kai text-xl font-bold text-ink-900 sm:text-2xl">
              沿途這些地方
            </h2>
            <span className="text-sm font-medium text-ink-600">
              點圓點或蓋章 → 收集腳印
            </span>
          </div>

          <div className="space-y-5">
            {route.places.map((place, i) => {
              const step = i + 1;
              const pTotal = route.places.length;
              const collected = mounted && has(place.id);
              const selected = selectedId === place.id;
              if (place.kind === 'property' && place.propertyId) {
                const property = getProperty(place.propertyId);
                if (property) {
                  return (
                    <PropertyCard
                      key={place.id}
                      placeId={place.id}
                      property={property}
                      isaQuote={place.isaQuote}
                      step={step}
                      total={pTotal}
                      accent={route.accent}
                      collected={collected}
                      onToggleStamp={() => toggle(place.id)}
                      selected={selected}
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
                  accent={route.accent}
                  collected={collected}
                  onToggleStamp={() => toggle(place.id)}
                  selected={selected}
                  delayMs={200 + i * 80}
                />
              );
            })}
          </div>
        </div>

        {/* 完歩祝賀 */}
        {completed && (
          <div className="mt-10 rounded-3xl bg-gradient-to-br from-isa-100 to-cream-100 p-6 text-center shadow-float fade-in-up sm:p-8">
            <div className="flex justify-center gap-2 text-4xl">
              <Sparkle className="h-8 w-8 text-[#FFD766]" />
              <PawPrint className="h-8 w-8 text-isa-400" />
              <Sparkle className="h-8 w-8 text-[#F08AA0]" />
            </div>
            <h3 className="font-kai mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">
              今日散步完成！
            </h3>
            <p className="mt-2 text-base text-ink-700">
              收集了 {stationCount} 個腳印，<br />
              伊薩覺得你是個很棒的散步夥伴。
            </p>
          </div>
        )}

        {/* 爆発エフェクト（完歩直後） */}
        {justCelebrated && (
          <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative">
              {[...Array(10)].map((_, i) => {
                const ang = (i / 10) * Math.PI * 2;
                const dist = 120 + Math.random() * 60;
                const x = Math.cos(ang) * dist;
                const y = Math.sin(ang) * dist;
                return (
                  <PawPrint
                    key={i}
                    className="absolute h-8 w-8 text-isa-400"
                    style={
                      {
                        animation: `paw-burst 1.5s ease-out forwards`,
                        animationDelay: `${i * 40}ms`,
                        ['--tx' as string]: `${x}px`,
                        ['--ty' as string]: `${y}px`,
                      } as React.CSSProperties
                    }
                  />
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-14 animate-fade-in">
          <DogCharacter
            size="sm"
            bubbleSide="right"
            message={
              completed
                ? '我覺得你走得很棒！要不要試試另一條？'
                : '走到這裡啦！要不要換一條路線試試？'
            }
          />
          <div className="mt-5 flex gap-3">
            <Link
              href="/select"
              className="flex-1 rounded-2xl bg-white px-4 py-3.5 text-center text-base font-semibold text-ink-900 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-float"
            >
              看其他路線
            </Link>
            <Link
              href="/about"
              className="flex-1 rounded-2xl bg-ink-900 px-4 py-3.5 text-center text-base font-semibold text-cream-50 transition-all hover:-translate-y-0.5 hover:bg-ink-700"
            >
              關於伊薩
            </Link>
          </div>
          <div className="mt-3 text-center text-xs text-ink-600 sm:hidden">
            提示：左右滑動可以切換路線
          </div>
        </div>
      </div>
    </main>
  );
}

function LoadingFallback() {
  return (
    <main className="mx-auto max-w-md px-6 py-8 sm:max-w-2xl sm:py-12">
      <div className="h-4 w-24 animate-pulse rounded bg-cream-100" />
      <div className="mt-6 h-48 animate-pulse rounded-3xl bg-cream-100" />
      <div className="mt-8 space-y-5">
        {[1, 2, 3, 4, 5].map((i) => (
          <PlaceCardSkeleton key={i} />
        ))}
      </div>
    </main>
  );
}

export default function RoutePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <RouteContent />
    </Suspense>
  );
}
