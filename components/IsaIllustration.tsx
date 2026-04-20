type Props = {
  className?: string;
  title?: string;
  /** 舌を出す（hover 時など） */
  tongueOut?: boolean;
  /** アイドルアニメーション（まばたき・耳ピク）を有効にするか */
  animated?: boolean;
};

export function IsaAdult({
  className,
  title = '伊薩',
  tongueOut = false,
  animated = true,
}: Props) {
  const openCls = animated ? 'isa-eye-open' : '';
  const closeCls = animated ? 'isa-eye-close' : '';
  const leftEarCls = animated ? 'isa-ear-flick-l' : '';
  const rightEarCls = animated ? 'isa-ear-flick-r' : '';

  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <defs>
        <radialGradient id="isa-head-g" cx="50%" cy="32%" r="72%">
          <stop offset="0%" stopColor="#F3D8AF" />
          <stop offset="100%" stopColor="#DDBB8F" />
        </radialGradient>
        <radialGradient id="isa-snout-g" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FCEBCE" />
          <stop offset="100%" stopColor="#F2DDB7" />
        </radialGradient>
      </defs>

      {/* 左耳（少し折れ気味：署名） */}
      <g
        className={leftEarCls}
        style={{ transformOrigin: '28px 28px', transformBox: 'fill-box' }}
      >
        <path d="M 25 34 Q 17 12 28 8 Q 36 18 37 34 Z" fill="#B8915F" />
        <path d="M 28 30 Q 24 16 30 14 Q 33 22 34 30 Z" fill="#EAA89A" />
        {/* 折れ部分のハイライト */}
        <path d="M 25 34 Q 22 25 27 22" stroke="#9E7849" strokeWidth="0.7" fill="none" strokeLinecap="round" />
      </g>

      {/* 右耳（直立） */}
      <g
        className={rightEarCls}
        style={{ transformOrigin: '72px 28px', transformBox: 'fill-box' }}
      >
        <path d="M 75 34 Q 82 6 72 4 Q 65 14 63 34 Z" fill="#B8915F" />
        <path d="M 72 30 Q 77 12 73 11 Q 69 20 67 30 Z" fill="#EAA89A" />
      </g>

      {/* 頭 */}
      <ellipse cx="50" cy="46" rx="28" ry="25" fill="url(#isa-head-g)" />

      {/* 額の白いブレーズ */}
      <path
        d="M 50 24 Q 47 34 48 44 Q 50 46 52 44 Q 53 34 50 24 Z"
        fill="#F8E6C6"
        opacity="0.7"
      />

      {/* マズル */}
      <ellipse cx="50" cy="56" rx="13" ry="9" fill="url(#isa-snout-g)" />

      {/* 胸 */}
      <path d="M 26 72 Q 50 80 74 72 L 75 99 Q 50 102 25 99 Z" fill="#F5E4C6" />

      {/* 胸の影 */}
      <path d="M 28 72 Q 50 78 72 72 L 72 76 Q 50 80 28 76 Z" fill="#E9D3AA" opacity="0.4" />

      {/* 首輪（ティール 2 層） */}
      <path d="M 25 74 Q 50 81 75 74 L 75 81 Q 50 88 25 81 Z" fill="#3FB0AE" />
      <path d="M 25 74 Q 50 81 75 74 L 75 77 Q 50 83 25 77 Z" fill="#7FD5D3" />

      {/* 首輪のハートタグ（署名要素） */}
      <g>
        <path
          d="M 50 83.5 C 47.5 81 44 82.5 45.5 85 L 50 89 L 54.5 85 C 56 82.5 52.5 81 50 83.5 Z"
          fill="#FFD766"
          stroke="#E0B548"
          strokeWidth="0.3"
        />
      </g>

      {/* freckles （目尻の小さな茶色ドット） */}
      <circle cx="32" cy="52" r="0.55" fill="#A07442" opacity="0.7" />
      <circle cx="68" cy="52" r="0.55" fill="#A07442" opacity="0.7" />

      {/* 目（開いた） */}
      <g className={openCls}>
        <ellipse cx="40" cy="46" rx="3" ry="3.7" fill="#2A2721" />
        <ellipse cx="60" cy="46" rx="3" ry="3.7" fill="#2A2721" />
        <circle cx="41.2" cy="44.4" r="1.2" fill="#FFFFFF" />
        <circle cx="61.2" cy="44.4" r="1.2" fill="#FFFFFF" />
        <circle cx="39" cy="48" r="0.45" fill="#FFFFFF" opacity="0.7" />
        <circle cx="59" cy="48" r="0.45" fill="#FFFFFF" opacity="0.7" />
        {/* まつ毛ヒント */}
        <path d="M 37.2 43.2 L 36.3 42.2" stroke="#2A2721" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M 62.8 43.2 L 63.7 42.2" stroke="#2A2721" strokeWidth="0.8" strokeLinecap="round" />
      </g>

      {/* 目（閉じた） */}
      <g className={closeCls}>
        <path
          d="M 37 47 Q 40 49 43 47"
          stroke="#2A2721"
          strokeWidth="1.7"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 57 47 Q 60 49 63 47"
          stroke="#2A2721"
          strokeWidth="1.7"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* 鼻 */}
      <ellipse cx="50" cy="53.5" rx="2.6" ry="2" fill="#2A2721" />
      <ellipse cx="50" cy="52.8" rx="0.8" ry="0.35" fill="#FFFFFF" opacity="0.55" />

      {/* 口 */}
      <path d="M 50 55.6 L 50 58.6" stroke="#3D2F28" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M 50 58.6 Q 46 60.5 43.5 58.4" stroke="#3D2F28" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M 50 58.6 Q 54 60.5 56.5 58.4" stroke="#3D2F28" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* 舌（hover 時） */}
      {tongueOut && (
        <g className="isa-tongue-pop">
          <ellipse cx="50" cy="62" rx="2.6" ry="3.5" fill="#F08AA0" />
          <path d="M 50 60 L 50 64.5" stroke="#C9566A" strokeWidth="0.5" strokeLinecap="round" />
          <ellipse cx="50" cy="60.5" rx="1" ry="0.6" fill="#FFB0C0" opacity="0.7" />
        </g>
      )}

      {/* ほっぺ */}
      <circle cx="30" cy="54" r="4" fill="#F0A89D" opacity="0.38" />
      <circle cx="70" cy="54" r="4" fill="#F0A89D" opacity="0.38" />
    </svg>
  );
}

export function IsaPuppy({
  className,
  title = '小時候的伊薩',
  animated = true,
}: Props) {
  const openCls = animated ? 'isa-eye-open' : '';
  const closeCls = animated ? 'isa-eye-close' : '';

  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <defs>
        <radialGradient id="isa-puppy-g" cx="50%" cy="38%" r="75%">
          <stop offset="0%" stopColor="#FBE2BA" />
          <stop offset="100%" stopColor="#ECCE9F" />
        </radialGradient>
      </defs>

      {/* 垂れ耳（大きくフワッと） */}
      <path d="M 22 38 Q 12 60 22 68 Q 34 64 34 42 Z" fill="#D4B78C" />
      <path d="M 78 38 Q 88 60 78 68 Q 66 64 66 42 Z" fill="#D4B78C" />

      {/* 頭（ぷっくり） */}
      <ellipse cx="50" cy="50" rx="30" ry="28" fill="url(#isa-puppy-g)" />

      {/* 耳内側 */}
      <path d="M 25 44 Q 20 58 26 64 Q 30 58 30 46 Z" fill="#F2B8A8" opacity="0.9" />
      <path d="M 75 44 Q 80 58 74 64 Q 70 58 70 46 Z" fill="#F2B8A8" opacity="0.9" />

      {/* 額 */}
      <ellipse cx="50" cy="42" rx="7" ry="10" fill="#FBEFD9" opacity="0.65" />

      {/* マズル */}
      <ellipse cx="50" cy="60" rx="14" ry="9" fill="#FBEFD9" />

      {/* 胸 */}
      <path d="M 32 76 Q 50 82 68 76 L 70 99 Q 50 102 30 99 Z" fill="#FBEFD9" />

      {/* 目 (open) — 子犬だから特大 */}
      <g className={openCls}>
        <ellipse cx="38" cy="50" rx="4.2" ry="5.2" fill="#2A2721" />
        <ellipse cx="62" cy="50" rx="4.2" ry="5.2" fill="#2A2721" />
        <circle cx="39.5" cy="47.8" r="1.8" fill="#FFFFFF" />
        <circle cx="63.5" cy="47.8" r="1.8" fill="#FFFFFF" />
        <circle cx="36.5" cy="52.2" r="0.8" fill="#FFFFFF" opacity="0.75" />
        <circle cx="60.5" cy="52.2" r="0.8" fill="#FFFFFF" opacity="0.75" />
      </g>

      {/* 目 (closed) */}
      <g className={closeCls}>
        <path d="M 34 50 Q 38 52.5 42 50" stroke="#2A2721" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 58 50 Q 62 52.5 66 50" stroke="#2A2721" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>

      {/* 小さな鼻 */}
      <ellipse cx="50" cy="57" rx="2" ry="1.6" fill="#2A2721" />
      <ellipse cx="50" cy="56.5" rx="0.6" ry="0.3" fill="white" opacity="0.55" />

      {/* 小さな口 */}
      <path d="M 50 58.8 L 50 60.5" stroke="#3D2F28" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      <path d="M 50 60.5 Q 48 62 46.5 61" stroke="#3D2F28" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M 50 60.5 Q 52 62 53.5 61" stroke="#3D2F28" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* 大きなほっぺ */}
      <circle cx="30" cy="60" r="4.8" fill="#F2B8A8" opacity="0.5" />
      <circle cx="70" cy="60" r="4.8" fill="#F2B8A8" opacity="0.5" />
    </svg>
  );
}

/** 小さいバッジやクォート用の簡易アイコン */
export function IsaIcon({ className, title = '伊薩' }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <path d="M 25 28 Q 18 9 28 6 Q 36 16 36 30 Z" fill="#B8915F" />
      <path d="M 75 28 Q 82 9 72 6 Q 64 16 64 30 Z" fill="#B8915F" />
      <ellipse cx="50" cy="52" rx="32" ry="30" fill="#E8CBA4" />
      <path d="M 28 25 Q 24 12 30 11 Q 33 20 34 28 Z" fill="#E8A892" />
      <path d="M 72 25 Q 76 12 70 11 Q 67 20 66 28 Z" fill="#E8A892" />
      <ellipse cx="50" cy="62" rx="14" ry="10" fill="#F5E4C6" />
      <ellipse cx="39" cy="50" rx="3.5" ry="4" fill="#2A2721" />
      <ellipse cx="61" cy="50" rx="3.5" ry="4" fill="#2A2721" />
      <circle cx="40" cy="48.8" r="1.1" fill="white" />
      <circle cx="62" cy="48.8" r="1.1" fill="white" />
      <ellipse cx="50" cy="58" rx="2.8" ry="2.1" fill="#2A2721" />
      <path d="M 50 60.5 L 50 63.5" stroke="#3D2F28" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M 50 63.5 Q 46 65 44 63" stroke="#3D2F28" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <path d="M 50 63.5 Q 54 65 56 63" stroke="#3D2F28" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <circle cx="32" cy="60" r="3" fill="#F0A89D" opacity="0.4" />
      <circle cx="68" cy="60" r="3" fill="#F0A89D" opacity="0.4" />
    </svg>
  );
}

/** 肉球 SVG（絵文字🐾の置き換え） */
export function PawPrint(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <ellipse cx="50" cy="62" rx="18" ry="15" />
      <ellipse cx="28" cy="40" rx="8" ry="10" />
      <ellipse cx="50" cy="28" rx="8" ry="10" />
      <ellipse cx="72" cy="40" rx="8" ry="10" />
      <ellipse cx="18" cy="68" rx="6" ry="8" />
      <ellipse cx="82" cy="68" rx="6" ry="8" />
    </svg>
  );
}

/** 骨 SVG */
export function Bone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M 18 42 Q 10 42 10 32 Q 10 22 20 22 Q 26 22 28 32 L 72 32 Q 74 22 80 22 Q 90 22 90 32 Q 90 42 82 42 Q 90 46 90 56 Q 90 66 80 66 Q 74 66 72 56 L 28 56 Q 26 66 20 66 Q 10 66 10 56 Q 10 46 18 42 Z" />
    </svg>
  );
}

/** ハート SVG（click で飛ぶやつ） */
export function Heart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M 10 17.5 C 10 17.5 1.5 11.5 1.5 6.5 A 4 4 0 0 1 10 5.5 A 4 4 0 0 1 18.5 6.5 C 18.5 11.5 10 17.5 10 17.5 Z" />
    </svg>
  );
}

/** キラキラ SVG */
export function Sparkle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M10 2 L11.8 8 L18 10 L11.8 12 L10 18 L8.2 12 L2 10 L8.2 8 Z" />
    </svg>
  );
}
