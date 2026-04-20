import Link from 'next/link';
import DogCharacter from '@/components/DogCharacter';
import { PawPrint } from '@/components/IsaIllustration';

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 背景柔色塊 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-sage-100 blur-3xl opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 rounded-full bg-skysoft-100 blur-3xl opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-isa-200 blur-3xl opacity-60"
      />

      {/* 飄浮的肉球裝飾 */}
      <PawPrint
        className="pointer-events-none absolute left-8 top-32 h-8 w-8 text-isa-400/40 paw-drift"
        style={{ ['--paw-rot' as string]: '-20deg' } as React.CSSProperties}
      />
      <PawPrint
        className="pointer-events-none absolute right-12 top-1/2 h-6 w-6 text-sage-500/30 paw-drift"
        style={
          {
            ['--paw-rot' as string]: '15deg',
            animationDelay: '1.5s',
          } as React.CSSProperties
        }
      />
      <PawPrint
        className="pointer-events-none absolute bottom-40 left-16 h-10 w-10 text-skysoft-500/25 paw-drift"
        style={
          {
            ['--paw-rot' as string]: '30deg',
            animationDelay: '3s',
          } as React.CSSProperties
        }
      />

      <div className="relative mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6 py-12 text-center sm:max-w-xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-3.5 py-1.5 text-sm font-medium text-ink-600 shadow-soft animate-fade-in">
          <span className="inline-block h-2 w-2 rounded-full bg-sage-500" />
          ISA Walk · 關渡生活探索
        </div>

        <div className="my-6 animate-fade-in-slow">
          <DogCharacter size="lg" />
        </div>

        <h1 className="font-kai animate-fade-in text-4xl font-bold leading-tight text-ink-900 sm:text-6xl">
          跟著伊薩
          <br className="sm:hidden" />
          認識關渡
        </h1>
        <p
          className="font-kai mt-5 max-w-sm text-lg font-medium leading-relaxed text-ink-600 animate-fade-in sm:text-xl"
          style={{ animationDelay: '150ms' }}
        >
          先喜歡生活，
          <br className="sm:hidden" />
          再遇見適合的家
        </p>

        <p
          className="mt-6 max-w-xs text-base leading-relaxed text-ink-400 animate-fade-in sm:text-lg"
          style={{ animationDelay: '300ms' }}
        >
          不急著看房
          <br />
          先走一段路，
          <br />
          感受空氣、咖啡、早餐與風
        </p>

        <Link
          href="/select"
          className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-ink-900 px-10 py-4 text-lg font-semibold text-cream-50 shadow-float transition-all duration-300 hover:-translate-y-1 hover:bg-ink-700 active:translate-y-0 animate-fade-in"
          style={{ animationDelay: '450ms' }}
        >
          <PawPrint className="h-5 w-5 text-cream-50" />
          <span>開始散步</span>
        </Link>

        <Link
          href="/about"
          className="mt-5 text-sm font-medium text-ink-400 underline-offset-4 hover:text-ink-700 hover:underline animate-fade-in"
          style={{ animationDelay: '600ms' }}
        >
          關於伊薩 × 全國不動產 →
        </Link>

        <div
          className="mt-8 text-sm text-ink-400 animate-fade-in"
          style={{ animationDelay: '750ms' }}
        >
          每條路線約 5 分鐘閱讀 · 8 條路線 · 12 間房源
        </div>
      </div>
    </main>
  );
}
