'use client';

import { useEffect, useRef, useState } from 'react';
import { IsaAdult, IsaPuppy, Heart, Sparkle } from './IsaIllustration';

type Size = 'sm' | 'md' | 'lg';

type Props = {
  message?: string;
  size?: Size;
  bubbleSide?: 'right' | 'top';
  className?: string;
};

const sizeMap: Record<Size, string> = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-36 h-36 sm:w-44 sm:h-44',
};

const PUPPY_CLICKS = 5;
const PUPPY_DURATION_MS = 4200;
const PUPPY_MESSAGES = [
  '汪！這是小時候的伊薩',
  '小小的我，耳朵還軟軟的',
  '看到這張臉，要笑一下哦',
  '那時候還不會帶路，但很會撒嬌',
];

type FloatingHeart = { id: number; x: number; color: string };

const HEART_COLORS = ['#F08AA0', '#FFB4C5', '#FF9B80', '#4FBFBD'];

export default function DogCharacter({
  message,
  size = 'md',
  bubbleSide = 'right',
  className = '',
}: Props) {
  const [tongueOut, setTongueOut] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [puppy, setPuppy] = useState(false);
  const [puppyMsg, setPuppyMsg] = useState(PUPPY_MESSAGES[0]);
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  const clickResetRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const puppyResetRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (clickResetRef.current) clearTimeout(clickResetRef.current);
      if (puppyResetRef.current) clearTimeout(puppyResetRef.current);
    };
  }, []);

  const handleClick = () => {
    const id = Date.now() + Math.random();
    const x = (Math.random() - 0.5) * 50;
    const color = HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)];
    setHearts((h) => [...h, { id, x, color }]);
    setTimeout(() => {
      setHearts((h) => h.filter((p) => p.id !== id));
    }, 1300);

    if (puppy) return;

    const next = clicks + 1;
    setClicks(next);

    if (clickResetRef.current) clearTimeout(clickResetRef.current);
    clickResetRef.current = setTimeout(() => setClicks(0), 1800);

    if (next >= PUPPY_CLICKS) {
      setClicks(0);
      setPuppyMsg(
        PUPPY_MESSAGES[Math.floor(Math.random() * PUPPY_MESSAGES.length)],
      );
      setPuppy(true);
      if (puppyResetRef.current) clearTimeout(puppyResetRef.current);
      puppyResetRef.current = setTimeout(
        () => setPuppy(false),
        PUPPY_DURATION_MS,
      );
    }
  };

  const showMessage = puppy ? puppyMsg : message;
  const sz = sizeMap[size];

  const dog = (
    <div className="relative">
      <div
        className={`relative ${sz} cursor-pointer select-none animate-bounce-slow`}
        onMouseEnter={() => setTongueOut(true)}
        onMouseLeave={() => setTongueOut(false)}
        onTouchStart={() => setTongueOut(true)}
        onTouchEnd={() => setTimeout(() => setTongueOut(false), 500)}
        onClick={handleClick}
      >
        {puppy && (
          <div className="absolute inset-0 -m-2 rounded-full bg-isa-200 blur-2xl opacity-80" />
        )}

        <div
          key={puppy ? 'puppy' : 'adult'}
          className="relative h-full w-full animate-fade-in drop-shadow-sm"
        >
          {puppy ? (
            <IsaPuppy className="h-full w-full" />
          ) : (
            <IsaAdult className="h-full w-full" tongueOut={tongueOut} />
          )}
        </div>

        {puppy && (
          <>
            <Sparkle className="pointer-events-none absolute -top-2 -left-2 h-6 w-6 text-[#FFD766] stamp-pop" />
            <Sparkle
              className="pointer-events-none absolute -top-1 -right-3 h-5 w-5 text-[#FF9B80] stamp-pop"
              style={{ animationDelay: '120ms' } as React.CSSProperties}
            />
            <Sparkle
              className="pointer-events-none absolute -bottom-2 left-1 h-4 w-4 text-[#4FBFBD] stamp-pop"
              style={{ animationDelay: '240ms' } as React.CSSProperties}
            />
          </>
        )}

        {hearts.map((h) => (
          <Heart
            key={h.id}
            className="pointer-events-none absolute bottom-full left-1/2 h-5 w-5 heart-float"
            style={
              {
                color: h.color,
                marginLeft: `${h.x - 10}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {clicks > 0 && clicks < PUPPY_CLICKS && !puppy && (
        <div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-ink-600 shadow-soft animate-fade-in">
          {'•'.repeat(clicks)}
          <span className="opacity-30">{'•'.repeat(PUPPY_CLICKS - clicks)}</span>
        </div>
      )}
    </div>
  );

  if (!showMessage) {
    return <div className={`inline-block ${className}`}>{dog}</div>;
  }

  if (bubbleSide === 'top') {
    return (
      <div className={`flex flex-col items-center gap-3 ${className}`}>
        <SpeechBubble text={showMessage} pointer="down" highlight={puppy} />
        {dog}
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      {dog}
      <SpeechBubble text={showMessage} pointer="left" highlight={puppy} />
    </div>
  );
}

function SpeechBubble({
  text,
  pointer,
  highlight,
}: {
  text: string;
  pointer: 'left' | 'down';
  highlight?: boolean;
}) {
  const bg = highlight ? 'bg-isa-100' : 'bg-white';
  const pointerColor = highlight ? 'border-r-isa-100' : 'border-r-white';
  const pointerColorDown = highlight ? 'border-t-isa-100' : 'border-t-white';
  return (
    <div className="relative max-w-xs animate-fade-in" key={text}>
      <div
        className={`rounded-2xl ${bg} px-4 py-3 text-base font-medium leading-relaxed text-ink-700 shadow-soft sm:text-lg`}
      >
        {text}
      </div>
      {pointer === 'left' && (
        <div
          className={`absolute -left-2 top-4 h-0 w-0 border-y-8 border-r-8 border-y-transparent ${pointerColor}`}
        />
      )}
      {pointer === 'down' && (
        <div
          className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-0 w-0 border-x-8 border-t-8 border-x-transparent ${pointerColorDown}`}
        />
      )}
    </div>
  );
}
