'use client';

import type { Property } from '@/data/properties';
import type { Accent } from '@/data/places';
import { IsaIcon } from './IsaIllustration';
import { PhoneIcon, ArrowRight } from './PlaceIcons';
import StampButton from './StampButton';

type Props = {
  placeId: string;
  property: Property;
  isaQuote?: string;
  step: number;
  total: number;
  accent: Accent;
  collected: boolean;
  onToggleStamp: () => void;
  selected?: boolean;
  delayMs?: number;
};

const accentMap = {
  sage: { ring: 'ring-sage-300', glow: 'bg-sage-100', badge: 'bg-sage-500 text-white', price: 'text-sage-700' },
  cream: { ring: 'ring-isa-200', glow: 'bg-cream-100', badge: 'bg-isa-400 text-white', price: 'text-isa-600' },
  skysoft: { ring: 'ring-skysoft-300', glow: 'bg-skysoft-100', badge: 'bg-skysoft-500 text-white', price: 'text-skysoft-700' },
  plum: { ring: 'ring-plum-300', glow: 'bg-plum-100', badge: 'bg-plum-500 text-white', price: 'text-plum-700' },
  peach: { ring: 'ring-peach-300', glow: 'bg-peach-100', badge: 'bg-peach-500 text-white', price: 'text-peach-700' },
} as const;

const NRA_URL = 'https://www.nra.com.tw/ab135/';
const NRA_PHONE = '02-2809-8093';

export default function PropertyCard({
  placeId,
  property,
  isaQuote,
  step,
  total,
  accent,
  collected,
  onToggleStamp,
  selected = false,
  delayMs = 0,
}: Props) {
  const a = accentMap[accent];

  const onDetail = () => {
    console.log('[ISA Walk] 查看詳情', property);
    window.open(NRA_URL, '_blank', 'noopener,noreferrer');
  };
  const onContact = () => {
    console.log('[ISA Walk] 聯絡我們', property);
    window.open(`tel:${NRA_PHONE.replace(/-/g, '')}`, '_self');
  };

  return (
    <div
      id={`place-${placeId}`}
      className={`relative scroll-mt-24 fade-in-up transition-all duration-300 ${
        selected ? 'ring-2 ring-isa-400 rounded-3xl -translate-y-0.5' : ''
      }`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="relative z-10 flex items-start gap-4">
        <div
          className={`flex h-[72px] w-[72px] shrink-0 flex-col items-center justify-center rounded-2xl ${a.glow} shadow-soft`}
        >
          <IsaIcon className="h-9 w-9" />
          <span className="text-xs font-bold text-ink-700">
            {step}/{total}
          </span>
        </div>

        <div
          className={`flex-1 rounded-3xl bg-white p-5 shadow-float ring-2 ${a.ring} sm:p-6`}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full ${a.badge} px-3 py-1 text-xs font-semibold`}
            >
              <IsaIcon className="h-4 w-4" />
              伊薩推薦
            </span>
            {property.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-cream-100 px-2.5 py-1 text-xs font-semibold text-ink-700"
              >
                {t}
              </span>
            ))}
          </div>

          <h3 className="font-kai mt-3 text-2xl font-bold leading-tight text-ink-900 sm:text-3xl">
            {property.title}
          </h3>

          <div className="mt-1 text-sm font-medium text-ink-600">
            {property.district} · {property.layout} · {property.sizePing} 坪
          </div>

          <div className={`mt-3 flex items-baseline gap-2 ${a.price}`}>
            <span className="font-kai text-4xl font-bold sm:text-5xl">
              {property.price}
            </span>
            <span className="text-sm font-medium text-ink-600">萬</span>
            {property.originalPrice && (
              <span className="text-sm text-ink-600 line-through">
                原價 {property.originalPrice} 萬
              </span>
            )}
          </div>

          <p className="mt-3 text-base leading-relaxed text-ink-700">
            {property.description}
          </p>

          {isaQuote && (
            <div className="mt-4 flex items-start gap-2 rounded-2xl bg-isa-100 px-4 py-3">
              <IsaIcon className="h-6 w-6 shrink-0" />
              <p className="font-kai text-base italic text-isa-600">
                「{isaQuote}」
              </p>
            </div>
          )}

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <button
              onClick={onDetail}
              className="flex-1 rounded-2xl bg-ink-900 px-4 py-3.5 text-base font-semibold text-cream-50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-700 active:translate-y-0"
            >
              查看完整資訊 →
            </button>
            <button
              onClick={onContact}
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-ink-900/20 bg-white px-4 py-3.5 text-base font-semibold text-ink-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-900 hover:bg-cream-100"
            >
              <PhoneIcon className="h-4 w-4" />
              {NRA_PHONE}
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
            <StampButton
              collected={collected}
              onClick={onToggleStamp}
              accent={accent}
            />
            <a
              href={NRA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ink-600 underline-offset-2 hover:text-nra hover:underline"
            >
              資料來源：全國不動產 關渡加盟店
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
