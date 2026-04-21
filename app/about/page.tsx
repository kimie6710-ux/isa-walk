import Link from 'next/link';
import DogCharacter from '@/components/DogCharacter';
import { IsaAdult, IsaPuppy, PawPrint, Heart } from '@/components/IsaIllustration';
import { properties, NRA_INFO } from '@/data/properties';
import { routes, routeOrder, routeTotalMin } from '@/data/places';
import { PhoneIcon, ArrowRight } from '@/components/PlaceIcons';

export const metadata = {
  title: '關於伊薩 × 全國不動產｜ISA Walk',
  description:
    '認識伊薩——奶茶色毛、藍綠項圈的關渡帶路狗，以及本站的房源合作夥伴全國不動產關渡加盟店。',
};

export default function AboutPage() {
  const totalMin = routeOrder.reduce(
    (sum, t) => sum + routeTotalMin(routes[t]),
    0,
  );

  return (
    <main className="relative min-h-screen pb-6">
      {/* 背景色塊 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-isa-200 blur-3xl opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-2/3 h-72 w-72 rounded-full bg-sage-100 blur-3xl opacity-60"
      />

      <div className="relative mx-auto max-w-md px-6 py-10 sm:max-w-3xl sm:py-16">
        <div className="mb-4 animate-fade-in">
          <Link
            href="/"
            className="text-base font-medium text-ink-400 transition-colors hover:text-ink-700"
          >
            ← 回首頁
          </Link>
        </div>

        <h1 className="font-kai mt-6 text-4xl font-bold leading-tight text-ink-900 sm:text-6xl">
          關於伊薩
          <br />
          <span className="text-ink-600">×</span>
          <br />
          全國不動產
        </h1>

        {/* 伊薩介紹 */}
        <section className="mt-14 fade-in-up">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-isa-200 px-3 py-1 text-xs font-semibold text-isa-600">
            <PawPrint className="h-3.5 w-3.5" />
            主角 · 伊薩
          </div>
          <h2 className="font-kai mt-2 text-3xl font-bold text-ink-900 sm:text-4xl">
            伊薩是誰？
          </h2>

          <div className="mt-6 flex flex-col items-center gap-6 rounded-3xl bg-white p-6 shadow-soft sm:flex-row sm:p-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="h-28 w-28 rounded-2xl bg-isa-100 p-2">
                  <IsaAdult className="h-full w-full" />
                </div>
                <span className="text-xs font-medium text-ink-400">現在</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-28 w-28 rounded-2xl bg-cream-100 p-2">
                  <IsaPuppy className="h-full w-full" />
                </div>
                <span className="text-xs font-medium text-ink-400">小時候</span>
              </div>
            </div>

            <div className="flex-1 space-y-3 text-base leading-relaxed text-ink-700">
              <p>
                <span className="font-kai text-lg font-semibold text-ink-900">
                  伊薩
                </span>
                是一隻奶茶色毛、戴藍綠色項圈的男孩子，是台灣在地的米克斯
                （不是柴犬，雖然常被認錯）。
              </p>
              <p>
                他小時候毛很軟、耳朵還沒立起來，現在則是關渡一帶的帶路專家——
                熟知哪間咖啡店老闆會偷偷塞肉乾、哪條河堤傍晚風最舒服、
                哪個公園的朋友最多。
              </p>
              <p className="text-sm text-ink-400">
                小提示：試試連點幾下伊薩，會發生一些事。
              </p>
            </div>
          </div>
        </section>

        {/* 伊薩的日常 */}
        <section className="mt-12 fade-in-up">
          <h3 className="font-kai text-2xl font-bold text-ink-900 sm:text-3xl">
            他喜歡這些地方
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { title: '河堤小徑', note: '風吹耳朵會飛起來' },
              { title: '老欉咖啡', note: '老闆偷塞肉乾' },
              { title: '貴子坑公園', note: '有五個朋友' },
              { title: '觀鳥亭', note: '不追，只看' },
              { title: '晚歸宵夜攤', note: '會等你一起' },
              { title: '書店櫃檯', note: '店貓不太理我' },
            ].map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/70 p-4 shadow-soft"
                style={{ animation: `fade-up 0.6s ${i * 80}ms both` } as React.CSSProperties}
              >
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-[#F08AA0]" />
                  <span className="font-kai text-base font-semibold text-ink-900">
                    {item.title}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-600">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NRA 介紹 */}
        <section className="mt-16 fade-in-up">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-nra shadow-soft">
            <span className="inline-block h-2 w-2 rounded-full bg-nra" />
            房源合作夥伴
          </div>
          <h2 className="font-kai mt-2 text-3xl font-bold text-ink-900 sm:text-4xl">
            全國不動產 關渡加盟店
          </h2>

          <div className="mt-6 rounded-3xl bg-white p-6 shadow-soft sm:p-8">
            <p className="text-base leading-relaxed text-ink-700 sm:text-lg">
              全國不動產關渡加盟店深耕關渡、淡水一帶，專門服務自住首購與換屋家庭。
              我們相信，找房子不只是看坪數與總價，而是
              <span className="font-semibold text-ink-900">「能不能把日子過好」</span>。
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-700 sm:text-lg">
              這個網站是我們與伊薩合作的實驗——讓你先認識關渡的生活，
              再自然遇見適合的家。
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-cream-100 p-4">
                <div className="text-xs font-medium text-ink-400">分店名稱</div>
                <div className="font-kai mt-1 text-base font-semibold text-ink-900">
                  {NRA_INFO.branch}
                </div>
              </div>
              <div className="rounded-2xl bg-cream-100 p-4">
                <div className="text-xs font-medium text-ink-400">營運公司</div>
                <div className="mt-1 text-sm font-semibold text-ink-900">
                  {NRA_INFO.company}
                </div>
              </div>
              <div className="rounded-2xl bg-cream-100 p-4">
                <div className="text-xs font-medium text-ink-400">地址</div>
                <div className="mt-1 text-sm font-semibold text-ink-900">
                  {NRA_INFO.address}
                </div>
              </div>
              <div className="rounded-2xl bg-cream-100 p-4">
                <div className="text-xs font-medium text-ink-400">聯絡電話</div>
                <a
                  href={`tel:${NRA_INFO.phone.replace(/-/g, '')}`}
                  className="font-kai mt-1 block text-lg font-semibold text-nra hover:underline"
                >
                  {NRA_INFO.phone}
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={NRA_INFO.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-center justify-center gap-2 rounded-2xl bg-nra px-4 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5"
              >
                看所有房源
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`tel:${NRA_INFO.phone.replace(/-/g, '')}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-ink-900/20 bg-white px-4 py-3.5 text-base font-semibold text-ink-900 transition-all hover:-translate-y-0.5 hover:border-ink-900"
              >
                <PhoneIcon className="h-4 w-4" />
                打電話詢問
              </a>
            </div>
          </div>
        </section>

        {/* 數據總覽 */}
        <section className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard label="散步路線" value={`${routeOrder.length}`} unit="條" />
          <StatCard label="沿途景點" value="40+" unit="個" />
          <StatCard
            label="推薦房源"
            value={`${properties.length}`}
            unit="間"
          />
          <StatCard label="走完全程" value={`${Math.round(totalMin / 60)}`} unit="小時" />
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-3xl bg-ink-900 p-8 text-center text-cream-50 fade-in-up">
          <DogCharacter size="md" />
          <h3 className="font-kai mt-4 text-2xl font-bold sm:text-3xl">
            準備好開始散步了嗎？
          </h3>
          <p className="mt-2 text-base opacity-85">
            選一條路線，伊薩會在起點等你。
          </p>
          <Link
            href="/select"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream-50 px-8 py-3.5 text-base font-semibold text-ink-900 transition-all hover:-translate-y-0.5"
          >
            <PawPrint className="h-5 w-5" />
            選擇路線
          </Link>
        </section>
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-4 text-center shadow-soft">
      <div className="font-kai text-3xl font-bold text-ink-900">
        {value}
        <span className="ml-1 text-sm font-medium text-ink-400">{unit}</span>
      </div>
      <div className="mt-0.5 text-xs font-medium text-ink-400 sm:text-sm">
        {label}
      </div>
    </div>
  );
}
