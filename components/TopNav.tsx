'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IsaIcon } from './IsaIllustration';

export default function TopNav() {
  const path = usePathname();
  if (path === '/') return null;

  const isActive = (p: string) =>
    p === '/select' ? path.startsWith('/select') || path.startsWith('/route') : path === p;

  return (
    <nav className="sticky top-0 z-40 border-b border-cream-200 bg-cream-50/90 backdrop-blur">
      <div
        className="mx-auto flex max-w-2xl items-center justify-between px-5 py-2.5 sm:max-w-3xl"
        style={{ paddingTop: 'max(0.625rem, env(safe-area-inset-top))' }}
      >
        <Link
          href="/"
          className="flex min-h-[44px] items-center gap-2 font-kai text-base font-bold text-ink-900 transition-opacity hover:opacity-80 sm:text-lg"
        >
          <IsaIcon className="h-9 w-9" />
          ISA Walk
        </Link>
        <div className="flex items-center gap-1.5 text-sm font-semibold sm:gap-2 sm:text-base">
          <Link
            href="/select"
            className={`flex min-h-[44px] items-center rounded-full px-4 py-2 transition-colors ${
              isActive('/select')
                ? 'bg-ink-900 text-cream-50'
                : 'text-ink-700 hover:bg-cream-100 hover:text-ink-900'
            }`}
          >
            路線
          </Link>
          <Link
            href="/about"
            className={`flex min-h-[44px] items-center rounded-full px-4 py-2 transition-colors ${
              isActive('/about')
                ? 'bg-ink-900 text-cream-50'
                : 'text-ink-700 hover:bg-cream-100 hover:text-ink-900'
            }`}
          >
            關於
          </Link>
        </div>
      </div>
    </nav>
  );
}
