export type Property = {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  tags: string[];
  layout: string;
  sizePing: number;
  district: string;
  address?: string;
  description: string;
  lat: number;
  lng: number;
};

// 資料來源：全國不動產 關渡加盟店 https://www.nra.com.tw/ab135/
// 實際門市位於淡水新市鎮自強路 96 號，多數房源位於淡水自強路/民族路/民權路/自立路一帶
// 電話：02-2809-8093
export const properties: Property[] = [
  {
    id: 'p1',
    title: '夢蝶小資兩房',
    price: 898,
    tags: ['首購', '小資族', '電梯大樓'],
    layout: '2 房 2 廳',
    sizePing: 21.84,
    district: '淡水區 · 自強路',
    description:
      '小資族的首購心頭好，電梯大樓含車位，近市場與學區。兩房格局方正、採光明亮，一個人或小家庭都剛好。',
    lat: 25.1745,
    lng: 121.4355,
  },
  {
    id: 'p2',
    title: '豪邸昇陽',
    price: 3988,
    tags: ['豪宅', '五房', '景觀'],
    layout: '5 房 3 廳 3 衛',
    sizePing: 94.02,
    district: '淡水區 · 自強路',
    description:
      '高樓層面河大宅，客廳開放式設計與五房格局，適合三代同堂或愛招待朋友的主人。含 VIP 影音導覽。',
    lat: 25.1720,
    lng: 121.4335,
  },
  {
    id: 'p3',
    title: '春天悅灣',
    price: 2900,
    originalPrice: 3200,
    tags: ['家庭', '四房', '降價'],
    layout: '4 房 2 廳 2 衛',
    sizePing: 63.69,
    district: '淡水區 · 民族路',
    description:
      '四房格局完整，主臥含獨立衛浴與更衣室，廚房與餐廳打通。近公園與親子設施，一家人的生活在這裡慢慢長大。',
    lat: 25.1785,
    lng: 121.4455,
  },
  {
    id: 'p4',
    title: '山居名峰幸福宅',
    price: 950,
    originalPrice: 998,
    tags: ['首購', '養狗友善', '降價'],
    layout: '2 房 2 廳',
    sizePing: 23.05,
    district: '淡水區 · 自強路',
    description:
      '近河堤、貴子坑公園，社區歡迎毛小孩一起生活。兩房格局方正，陽台通風，適合喜歡帶狗散步的人。',
    lat: 25.1738,
    lng: 121.4348,
  },
  {
    id: 'p5',
    title: '來富高樓景四房',
    price: 2198,
    tags: ['高樓', '四房', '景觀'],
    layout: '4 房 2 廳 2 衛',
    sizePing: 55.29,
    district: '淡水區 · 自立路',
    description:
      '高樓層景觀四房，窗景開闊可見河景與觀音山。適合重視視野與採光的一家人。',
    lat: 25.1755,
    lng: 121.4375,
  },
  {
    id: 'p6',
    title: '擎天景觀豪邸',
    price: 2166,
    originalPrice: 2188,
    tags: ['景觀', '四房', '高端'],
    layout: '4 房 2 廳',
    sizePing: 73,
    district: '淡水區 · 自強路',
    description:
      '正面河景的景觀豪邸，落地窗看得見夕陽與飛鳥。73 坪大器格局，是重視生活品質的首選。',
    lat: 25.1715,
    lng: 121.4325,
  },
  {
    id: 'p7',
    title: '書香綠蔭水世紀',
    price: 1598,
    tags: ['文青', '兩房', '綠意'],
    layout: '2 房 2 廳',
    sizePing: 26.14,
    district: '淡水區 · 民權路',
    description:
      '社區規劃中庭綠園道，兩房格局適合文青生活。附近有獨立書店與咖啡館，日子過得很慢、很剛好。',
    lat: 25.1763,
    lng: 121.4402,
  },
  {
    id: 'p8',
    title: '關渡三房採光美寓',
    price: 1330,
    originalPrice: 1488,
    tags: ['家庭', '三房', '降價'],
    layout: '3 房 2 廳',
    sizePing: 28.26,
    district: '北投區 · 大度路',
    description:
      '三房公寓採光好，近傳統市場與學區。社區安靜，是一家人在關渡落腳的剛好尺寸。',
    lat: 25.1252,
    lng: 121.4680,
  },
  {
    id: 'p9',
    title: '夢十七華廈三房',
    price: 1388,
    originalPrice: 1488,
    tags: ['三房', '華廈', '通勤'],
    layout: '3 房 2 廳',
    sizePing: 48.17,
    district: '淡水區 · 自強路',
    description:
      '48 坪三房華廈，格局方正，步行到關渡捷運站約 15 分鐘、淡水新市鎮車程約 10 分。通勤族與小家庭都合適。',
    lat: 25.1742,
    lng: 121.4360,
  },
  {
    id: 'p10',
    title: '藝術庭園景觀三房',
    price: 1788,
    tags: ['藝文', '庭園', '三房', '含車位'],
    layout: '3 房 2 廳 + 車位',
    sizePing: 45.55,
    district: '淡水區 · 自強路',
    description:
      '藝術感社區規劃，中庭花園四季有花。三房格局含平面車位。附近有畫廊、咖啡與獨立書店。',
    lat: 25.1730,
    lng: 121.4370,
  },
  {
    id: 'p11',
    title: '來富高樓景閣',
    price: 1598,
    tags: ['高樓', '兩房', '景觀'],
    layout: '2 房 2 廳',
    sizePing: 46.93,
    district: '淡水區 · 自立路',
    description:
      '高樓兩房景觀宅，窗外是關渡平原與夕陽。適合重視景觀又不想要太大空間的單身族或兩人生活。',
    lat: 25.1750,
    lng: 121.4378,
  },
  {
    id: 'p12',
    title: '晴川書院美宅',
    price: 2288,
    tags: ['文青', '三房', '書院風格'],
    layout: '3 房 2 廳 2 衛',
    sizePing: 52.45,
    district: '淡水區 · 自強路',
    description:
      '書院風格的三房美宅，52 坪格局含大書房。安靜、有氣質，適合寫作、閱讀、過一種有節奏的生活。',
    lat: 25.1735,
    lng: 121.4392,
  },
];

export const getProperty = (id: string): Property | undefined =>
  properties.find((p) => p.id === id);

export const NRA_INFO = {
  branch: '全國不動產 關渡加盟店',
  company: '台金國際資產管理有限公司',
  address: '新北市淡水區自強路 96 號',
  phone: '02-2809-8093',
  url: 'https://www.nra.com.tw/ab135/',
};
