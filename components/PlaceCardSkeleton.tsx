export default function PlaceCardSkeleton() {
  return (
    <div className="flex items-start gap-4 animate-pulse">
      <div className="h-[68px] w-[68px] shrink-0 rounded-2xl bg-cream-100" />
      <div className="flex-1 rounded-2xl bg-white/60 px-5 py-4">
        <div className="flex gap-2">
          <div className="h-5 w-14 rounded-full bg-cream-100" />
          <div className="h-5 w-20 rounded-full bg-cream-100" />
        </div>
        <div className="mt-3 h-5 w-40 rounded bg-cream-100" />
        <div className="mt-3 h-3 w-full rounded bg-cream-100" />
        <div className="mt-2 h-3 w-3/4 rounded bg-cream-100" />
      </div>
    </div>
  );
}
