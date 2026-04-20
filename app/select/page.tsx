import Link from 'next/link';
import DogCharacter from '@/components/DogCharacter';
import RouteCard from '@/components/RouteCard';
import { routes, routeOrder, routeTotalMin } from '@/data/places';

export default function SelectPage() {
  return (
    <main className="relative min-h-screen">
      <div className="mx-auto max-w-md px-6 py-10 sm:max-w-3xl sm:py-16">
        <div className="mb-2 animate-fade-in">
          <Link
            href="/"
            className="text-base font-medium text-ink-400 transition-colors hover:text-ink-700"
          >
            ← 回首頁
          </Link>
        </div>

        <div className="mt-4 flex items-start gap-3 animate-fade-in">
          <DogCharacter
            size="md"
            message="今天想怎麼走呢？有 8 條路線，每條都有我喜歡的地方。"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {routeOrder.map((type, i) => {
            const r = routes[type];
            return (
              <RouteCard
                key={r.type}
                type={r.type}
                title={r.title}
                subtitle={r.subtitle}
                accent={r.accent}
                totalMin={routeTotalMin(r)}
                stationCount={r.places.length}
                delayMs={120 + i * 90}
              />
            );
          })}
        </div>

        <p
          className="mt-10 text-center text-sm font-medium text-ink-400 animate-fade-in"
          style={{ animationDelay: '900ms' }}
        >
          不同的路線 · 不同的生活樣子 · 最後自然遇見適合的房子
        </p>
      </div>
    </main>
  );
}
