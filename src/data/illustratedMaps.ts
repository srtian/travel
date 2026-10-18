export const illustratedMaps = [
  {
    slug: 'kumano',
    number: '01',
    title: '熊野古道',
    dates: '10.31 — 11.05',
    summary: '沿中边路穿过森林，再去那智看瀑布与海。',
    route: '纪伊田边 → 近露 → 本宫 → 新宫 → 那智胜浦',
    details: '两日徒步、巴士衔接、日照判断与沿途盖章。',
    day: 1,
    color: '#406846',
  },
  {
    slug: 'nara',
    number: '02',
    title: '奈良',
    dates: '11.05 — 11.06',
    summary: '在鹿与古寺之间，给旅途留一点空白。',
    route: 'JR 奈良 → 猿泽池 → 东大寺 → 二月堂',
    details: '市区慢走、若草山日落备选与次晨京都转场。',
    day: 6,
    color: '#8b6c38',
  },
  {
    slug: 'kyoto',
    number: '03',
    title: '京都',
    dates: '11.06 — 11.09',
    summary: '循着苔色与灯火，走过三日古都。',
    route: '东山 → 西芳寺与奥嵯峨 → 北东山 → 东寺',
    details: '按天分栏，标明西芳寺预约、高雄替代与夜场时间。',
    day: 7,
    color: '#af603f',
  },
  {
    slug: 'osaka',
    number: '04',
    title: '大阪',
    dates: '11.09 — 11.10',
    summary: '从山脚的晚霞，走进城市的灯海。',
    route: '新石切 → 石切 → 难波 → 黑门市场 → KIX',
    details: '区分去回程车站，串起日落、霓虹与机场列车。',
    day: 10,
    color: '#386d88',
  },
] as const;

export type IllustratedMap = (typeof illustratedMaps)[number];

export function mapAsset(slug: string, format: 'svg' | 'png' | 'pdf' | 'preview.webp') {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return `${base}assets/maps/japan-2026/${slug}${format === 'preview.webp' ? '-preview.webp' : `.${format}`}`;
}

export function mapViewer(slug: string) {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return `${base}trips/japan-2026/maps/${slug}/`;
}
