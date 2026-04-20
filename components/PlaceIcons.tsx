import type { PlaceKind } from '@/data/places';
import type { RouteType } from '@/data/places';

type IconProps = {
  className?: string;
  title?: string;
};

/* ───── 場所の種類アイコン ───── */

export function TreeIcon({ className, title = '公園' }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      <ellipse cx="50" cy="88" rx="32" ry="4" fill="#2A2721" opacity="0.08" />
      <rect x="45" y="60" width="10" height="25" rx="2" fill="#A07442" />
      <circle cx="50" cy="44" r="22" fill="#7FAA5E" />
      <circle cx="34" cy="50" r="15" fill="#6B9E5E" />
      <circle cx="66" cy="50" r="15" fill="#6B9E5E" />
      <circle cx="50" cy="32" r="13" fill="#A8C8A0" />
      <circle cx="42" cy="42" r="2" fill="#4A7340" opacity="0.5" />
      <circle cx="58" cy="48" r="1.5" fill="#4A7340" opacity="0.5" />
      <circle cx="52" cy="54" r="1.5" fill="#4A7340" opacity="0.5" />
    </svg>
  );
}

export function CoffeeIcon({ className, title = '咖啡店' }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      {/* 蒸気 */}
      <path d="M 38 18 Q 34 24 38 30 Q 42 36 38 42" stroke="#C8B89E" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M 50 14 Q 46 22 50 30 Q 54 38 50 44" stroke="#C8B89E" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M 62 18 Q 58 24 62 30 Q 66 36 62 42" stroke="#C8B89E" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
      {/* カップ */}
      <path d="M 25 46 L 30 82 Q 32 88 38 88 L 62 88 Q 68 88 70 82 L 75 46 Z" fill="#F5E4C6" stroke="#B8915F" strokeWidth="2" />
      {/* 持ち手 */}
      <path d="M 75 52 Q 88 54 88 66 Q 88 78 75 78" stroke="#B8915F" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      {/* コーヒー */}
      <ellipse cx="50" cy="48" rx="23" ry="3.5" fill="#6B4A30" />
      <ellipse cx="50" cy="48" rx="20" ry="2.2" fill="#8A6847" />
      {/* ハート */}
      <path d="M 50 48 C 48.5 46 46 46.5 46.5 48.5 L 50 51 L 53.5 48.5 C 54 46.5 51.5 46 50 48 Z" fill="#F5E4C6" opacity="0.85" />
    </svg>
  );
}

export function ToastIcon({ className, title = '早餐' }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      {/* パン */}
      <path d="M 18 48 Q 18 28 34 26 L 66 26 Q 82 28 82 48 L 82 76 Q 82 84 74 84 L 26 84 Q 18 84 18 76 Z" fill="#F0C47A" stroke="#B8915F" strokeWidth="2" />
      {/* 中身（バター） */}
      <rect x="28" y="52" width="44" height="22" rx="3" fill="#F5E4C6" />
      <rect x="34" y="58" width="32" height="4" rx="2" fill="#FFD766" opacity="0.8" />
      {/* 煙 */}
      <path d="M 40 20 Q 38 14 42 10" stroke="#C8B89E" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M 58 20 Q 60 14 56 10" stroke="#C8B89E" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function MarketIcon({ className, title = '市場' }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      {/* バスケット本体 */}
      <path d="M 18 44 L 82 44 L 74 84 Q 74 88 70 88 L 30 88 Q 26 88 26 84 Z" fill="#E89A78" stroke="#B46F51" strokeWidth="2" />
      {/* 編み目 */}
      <path d="M 22 52 L 78 52" stroke="#B46F51" strokeWidth="1.2" opacity="0.5" />
      <path d="M 24 64 L 76 64" stroke="#B46F51" strokeWidth="1.2" opacity="0.5" />
      <path d="M 26 76 L 74 76" stroke="#B46F51" strokeWidth="1.2" opacity="0.5" />
      {/* 持ち手 */}
      <path d="M 30 44 Q 30 20 50 20 Q 70 20 70 44" stroke="#B46F51" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* 中身（野菜） */}
      <circle cx="38" cy="38" r="8" fill="#7FAA5E" />
      <circle cx="38" cy="36" r="3" fill="#A8C8A0" />
      <ellipse cx="54" cy="40" rx="10" ry="6" fill="#E89A78" />
      <circle cx="66" cy="38" r="6" fill="#FFD766" />
    </svg>
  );
}

export function TrainIcon({ className, title = '捷運站' }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      {/* 車体 */}
      <rect x="20" y="24" width="60" height="54" rx="12" fill="#AECDD7" stroke="#5E93A5" strokeWidth="2" />
      {/* 前面ガラス */}
      <rect x="26" y="30" width="48" height="18" rx="4" fill="#E3EEF2" />
      {/* ヘッドライト */}
      <circle cx="32" cy="40" r="2" fill="#FFD766" />
      <circle cx="68" cy="40" r="2" fill="#FFD766" />
      {/* ドア */}
      <rect x="42" y="54" width="16" height="18" rx="2" fill="#5E93A5" />
      <circle cx="46" cy="63" r="0.8" fill="#E3EEF2" />
      <circle cx="54" cy="63" r="0.8" fill="#E3EEF2" />
      {/* 車輪 */}
      <circle cx="30" cy="82" r="5" fill="#2A2721" />
      <circle cx="70" cy="82" r="5" fill="#2A2721" />
      <circle cx="30" cy="82" r="1.8" fill="#5E93A5" />
      <circle cx="70" cy="82" r="1.8" fill="#5E93A5" />
      {/* レール */}
      <path d="M 14 88 L 86 88" stroke="#8A8275" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function BookIcon({ className, title = '書店' }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      <rect x="22" y="28" width="56" height="14" rx="2" fill="#B58ABD" />
      <rect x="22" y="28" width="56" height="14" fill="url(#book1)" opacity="0.2" />
      <rect x="18" y="46" width="60" height="14" rx="2" fill="#E89A78" />
      <rect x="24" y="64" width="54" height="14" rx="2" fill="#7FAA5E" />
      <defs>
        <linearGradient id="book1">
          <stop offset="0" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M 28 32 L 28 38" stroke="#FFF" strokeWidth="1.5" opacity="0.5" />
      <path d="M 24 50 L 24 56" stroke="#FFF" strokeWidth="1.5" opacity="0.5" />
      <path d="M 30 68 L 30 74" stroke="#FFF" strokeWidth="1.5" opacity="0.5" />
      {/* しおり */}
      <path d="M 68 28 L 68 50 L 72 46 L 76 50 L 76 28 Z" fill="#FFD766" stroke="#B89A62" strokeWidth="0.8" />
    </svg>
  );
}

export function HouseIcon({ className, title = '房子' }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      {/* 屋根 */}
      <path d="M 14 52 L 50 20 L 86 52 L 78 52 L 78 86 L 22 86 L 22 52 Z" fill="#F5E4C6" stroke="#B8915F" strokeWidth="2" />
      <path d="M 14 52 L 50 20 L 86 52" fill="#E89A78" stroke="#B46F51" strokeWidth="2" />
      {/* 煙突 */}
      <rect x="66" y="26" width="8" height="14" fill="#B46F51" />
      {/* ドア */}
      <path d="M 42 64 L 42 86 L 58 86 L 58 64 Q 58 56 50 56 Q 42 56 42 64 Z" fill="#6B4A30" />
      <circle cx="53" cy="74" r="1.2" fill="#FFD766" />
      {/* 窓 */}
      <rect x="28" y="60" width="10" height="10" rx="1" fill="#AECDD7" stroke="#5E93A5" strokeWidth="1" />
      <rect x="62" y="60" width="10" height="10" rx="1" fill="#AECDD7" stroke="#5E93A5" strokeWidth="1" />
      <path d="M 33 60 L 33 70 M 28 65 L 38 65" stroke="#5E93A5" strokeWidth="1" />
      <path d="M 67 60 L 67 70 M 62 65 L 72 65" stroke="#5E93A5" strokeWidth="1" />
      {/* ハート */}
      <path d="M 50 38 C 47.5 35 43 36 44.5 40 L 50 45 L 55.5 40 C 57 36 52.5 35 50 38 Z" fill="#F08AA0" />
    </svg>
  );
}

/* ───── 路線用アイコン ───── */

export function SunsetIcon({ className, title = '景觀' }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      <defs>
        <linearGradient id="sunsky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F4B894" />
          <stop offset="1" stopColor="#FFD766" />
        </linearGradient>
      </defs>
      <rect x="12" y="24" width="76" height="50" rx="12" fill="url(#sunsky)" />
      <circle cx="50" cy="58" r="14" fill="#FFE9A0" />
      <path d="M 12 62 L 28 54 L 40 62 L 55 48 L 70 62 L 88 56 L 88 74 L 12 74 Z" fill="#5E93A5" opacity="0.9" />
      <path d="M 12 78 L 88 78" stroke="#3F6D7D" strokeWidth="3" strokeLinecap="round" />
      <path d="M 18 82 Q 30 80 40 82" stroke="#5E93A5" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 58 82 Q 70 80 82 82" stroke="#5E93A5" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function FamilyIcon({ className, title = '家庭' }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      {/* 大人 */}
      <circle cx="36" cy="38" r="10" fill="#E8CBA4" />
      <path d="M 22 84 Q 22 60 36 60 Q 50 60 50 84 Z" fill="#B58ABD" />
      {/* 子供 */}
      <circle cx="68" cy="48" r="8" fill="#F4DDC1" />
      <path d="M 58 86 Q 58 66 68 66 Q 78 66 78 86 Z" fill="#E89A78" />
      {/* ハート */}
      <path d="M 50 26 C 47.5 23 43 24 44.5 28 L 50 33 L 55.5 28 C 57 24 52.5 23 50 26 Z" fill="#F08AA0" />
    </svg>
  );
}

export function PaletteIcon({ className, title = '藝文' }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      <path d="M 50 18 C 26 18 12 36 12 54 C 12 70 22 80 36 80 C 40 80 42 78 42 74 C 42 68 38 68 38 60 C 38 54 44 50 52 50 C 66 50 82 44 86 38 C 88 26 72 18 50 18 Z" fill="#F4DDC1" stroke="#B46F51" strokeWidth="2" />
      <circle cx="30" cy="40" r="5" fill="#E89A78" />
      <circle cx="46" cy="32" r="5" fill="#7FAA5E" />
      <circle cx="62" cy="34" r="5" fill="#AECDD7" />
      <circle cx="72" cy="46" r="5" fill="#B58ABD" />
      <circle cx="28" cy="60" r="5" fill="#FFD766" />
      {/* 筆 */}
      <rect x="58" y="60" width="28" height="5" rx="2" transform="rotate(20 58 60)" fill="#6B4A30" />
      <path d="M 82 70 L 90 68 L 88 78 Z" fill="#F08AA0" />
    </svg>
  );
}
export function CommuteIcon(props: IconProps) {
  return <TrainIcon {...props} />;
}

export function LeafIcon({ className, title = '放鬆' }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      <path d="M 20 78 Q 20 30 70 20 Q 80 60 38 80 Q 28 82 20 78 Z" fill="#A8C8A0" stroke="#4A7340" strokeWidth="2" />
      <path d="M 28 74 Q 48 50 66 28" stroke="#4A7340" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M 34 70 Q 42 66 50 64" stroke="#4A7340" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M 40 60 Q 48 56 56 52" stroke="#4A7340" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

/* ───── 路線種類 → アイコンマッピング ───── */

export function RouteIcon({
  type,
  className,
}: {
  type: RouteType;
  className?: string;
}) {
  switch (type) {
    case 'relax':
      return <LeafIcon className={className} />;
    case 'daily':
      return <CoffeeIcon className={className} />;
    case 'commute':
      return <TrainIcon className={className} />;
    case 'dog':
      return <PawCircleIcon className={className} />;
    case 'view':
      return <SunsetIcon className={className} />;
    case 'family':
      return <FamilyIcon className={className} />;
    case 'luxury':
      return <LuxuryIcon className={className} />;
    case 'art':
      return <PaletteIcon className={className} />;
  }
}

export function PawCircleIcon({ className, title = '狗狗' }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      <circle cx="50" cy="50" r="38" fill="#F4DDC1" />
      <ellipse cx="50" cy="62" rx="16" ry="13" fill="#A87B4E" />
      <ellipse cx="30" cy="42" rx="7" ry="9" fill="#A87B4E" />
      <ellipse cx="50" cy="32" rx="7" ry="9" fill="#A87B4E" />
      <ellipse cx="70" cy="42" rx="7" ry="9" fill="#A87B4E" />
    </svg>
  );
}

export function LuxuryIcon({ className, title = '精品' }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      {/* ダイヤモンド */}
      <path d="M 30 30 L 70 30 L 80 44 L 50 86 L 20 44 Z" fill="#B58ABD" stroke="#6E4A78" strokeWidth="2" />
      <path d="M 30 30 L 50 46 L 70 30" stroke="#6E4A78" strokeWidth="1.5" fill="none" />
      <path d="M 20 44 L 50 46 L 80 44" stroke="#6E4A78" strokeWidth="1.5" fill="none" />
      <path d="M 50 46 L 50 86" stroke="#6E4A78" strokeWidth="1.5" fill="none" />
      <path d="M 40 36 L 44 42" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

/* ───── 場所 kind → アイコンマッピング ───── */

export function KindIcon({
  kind,
  className,
}: {
  kind: PlaceKind;
  className?: string;
}) {
  switch (kind) {
    case 'park':
      return <TreeIcon className={className} />;
    case 'cafe':
      return <CoffeeIcon className={className} />;
    case 'breakfast':
      return <ToastIcon className={className} />;
    case 'market':
      return <MarketIcon className={className} />;
    case 'mrt':
      return <TrainIcon className={className} />;
    case 'bookstore':
      return <BookIcon className={className} />;
    case 'property':
      return <HouseIcon className={className} />;
  }
}

export function PhoneIcon({ className, title = '電話' }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title} fill="currentColor">
      <path d="M 3 5 Q 3 3 5 3 L 7 3 Q 8 3 8.5 4 L 9.5 6 Q 10 7 9 8 L 8 9 Q 9.5 12 11 13.5 L 12 12.5 Q 13 11.5 14 12 L 16 13 Q 17 13.5 17 14.5 L 17 16 Q 17 18 15 18 Q 7 18 3 11 Q 3 10 3 5 Z" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 10 L16 10 M11 5 L16 10 L11 15" />
    </svg>
  );
}

export function WalkIcon({ className, title = '步行' }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="currentColor" role="img" aria-label={title}>
      <circle cx="12" cy="3" r="2" />
      <path d="M 9 6 L 10 11 L 7 15 L 8 17 L 11 13 L 13 17 L 14 17 L 13 12 L 15 10 L 15 7 L 13 5 L 11 5 L 9 6 Z" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <circle cx="10" cy="10" r="7.5" />
      <path d="M 10 6 L 10 10 L 13 12" />
    </svg>
  );
}
