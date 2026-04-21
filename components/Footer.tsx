import Link from 'next/link';
import { IsaIcon } from './IsaIllustration';
import { NRA_INFO } from '@/data/properties';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-cream-200 bg-cream-100/60 px-6 py-10">
      <div className="mx-auto max-w-md sm:max-w-2xl">
        <div className="flex items-start gap-4">
          <IsaIcon className="h-12 w-12 shrink-0" />
          <div className="flex-1">
            <div className="font-kai text-lg font-bold tracking-wide text-ink-900 sm:text-xl">
              ISA Walk
            </div>
            <p className="mt-1 text-sm leading-relaxed text-ink-600">
              先喜歡生活，再遇見適合的家。跟著伊薩散步，認識關渡的日常。
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-4 shadow-soft">
          <div className="flex items-center gap-2 text-xs font-medium text-nra">
            <span className="inline-block h-2 w-2 rounded-full bg-nra" />
            房源合作夥伴
          </div>
          <div className="mt-1.5 font-kai text-base font-semibold text-ink-900 sm:text-lg">
            {NRA_INFO.branch}
          </div>
          <div className="mt-0.5 text-sm text-ink-600">
            {NRA_INFO.company}
          </div>
          <dl className="mt-3 space-y-1.5 text-sm text-ink-600">
            <div className="flex gap-2">
              <dt className="w-10 shrink-0 text-ink-400">地址</dt>
              <dd>{NRA_INFO.address}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-10 shrink-0 text-ink-400">電話</dt>
              <dd>
                <a
                  href={`tel:${NRA_INFO.phone.replace(/-/g, '')}`}
                  className="font-medium text-ink-900 hover:underline"
                >
                  {NRA_INFO.phone}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-10 shrink-0 text-ink-400">官網</dt>
              <dd>
                <a
                  href={NRA_INFO.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-nra underline-offset-2 hover:underline"
                >
                  www.nra.com.tw/ab135
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link href="/" className="text-ink-600 hover:text-ink-900">
            首頁
          </Link>
          <Link href="/select" className="text-ink-600 hover:text-ink-900">
            選散步路線
          </Link>
          <Link href="/about" className="text-ink-600 hover:text-ink-900">
            關於伊薩 × 全國不動產
          </Link>
        </nav>

        <div className="mt-6 text-sm text-ink-600 safe-bottom">
          © 2026 ISA Walk · 房源資料僅供參考，實際以全國不動產官方資訊為準
        </div>
      </div>
    </footer>
  );
}
