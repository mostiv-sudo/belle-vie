export interface Service {
  id: string;
  title: string;
  category: 'face' | 'body' | 'hair';
  description: string;
  shortDescription: string;
  price: string;
  duration: string;
  image: string;
  indications: string[];
  contraindications: string[];
  beforeAfter?: {
    before: string;
    after: string;
  };
}

export const services: Service[] = [
  {
    id: 'laser-rejuvenation',
    title: 'Лазерное омоложение',
    category: 'face',
    shortDescription: 'Эффективное омоложение кожи лица без операции',
    description: 'Лазерное омоложение — современная процедура, которая позволяет улучшить состояние кожи, разгладить морщины, выровнять тон и текстуру. Процедура стимулирует выработку коллагена и запускает процессы естественного омоложения.',
    price: 'от 15 000 ₽',
    duration: '60 минут',
    image: 'https://images.unsplash.com/photo-1710839465443-8671ced76e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGZhY2lhbCUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzM4MTc1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    indications: [
      'Мелкие и средние морщины',
      'Неровный тон кожи',
      'Расширенные поры',
      'Постакне и рубцы',
      'Пигментация',
    ],
    contraindications: [
      'Беременность и лактация',
      'Онкологические заболевания',
      'Воспалительные процессы на коже',
      'Склонность к образованию келоидных рубцов',
      'Сахарный диабет',
    ],
  },
  {
    id: 'biorevitalization',
    title: 'Биоревитализация',
    category: 'face',
    shortDescription: 'Глубокое увлажнение и восстановление кожи',
    description: 'Биоревитализация — инъекционная процедура с гиалуроновой кислотой, которая глубоко увлажняет кожу, улучшает её тонус и эластичность. Идеально подходит для профилактики старения.',
    price: 'от 12 000 ₽',
    duration: '40 минут',
    image: 'https://images.unsplash.com/photo-1763472051866-2e627b1800ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHByb2NlZHVyZSUyMHdvbWFufGVufDF8fHx8MTc3MzgxNzUzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    indications: [
      'Сухость и обезвоженность кожи',
      'Потеря упругости',
      'Мелкие морщины',
      'Тусклый цвет лица',
      'Профилактика старения',
    ],
    contraindications: [
      'Беременность и лактация',
      'Острые воспалительные процессы',
      'Герпес в активной фазе',
      'Аутоиммунные заболевания',
    ],
  },
  {
    id: 'botox',
    title: 'Ботулинотерапия (Ботокс)',
    category: 'face',
    shortDescription: 'Коррекция мимических морщин',
    description: 'Инъекции ботулотоксина — безопасный и эффективный способ разгладить мимические морщины на лбу, между бровями и вокруг глаз. Результат виден через 3-5 дней и сохраняется до 6 месяцев.',
    price: 'от 8 000 ₽',
    duration: '30 минут',
    image: 'https://images.unsplash.com/photo-1556227997-e90840afbf40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM4MTc1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    indications: [
      'Мимические морщины',
      'Складки на лбу',
      '"Гусиные лапки"',
      'Морщины между бровями',
      'Асимметрия лица',
    ],
    contraindications: [
      'Беременность и лактация',
      'Миастения',
      'Острые инфекции',
      'Прием антибиотиков',
    ],
  },
  {
    id: 'rf-lifting',
    title: 'RF-лифтинг тела',
    category: 'body',
    shortDescription: 'Подтяжка и коррекция контуров тела',
    description: 'RF-лифтинг — аппаратная процедура для тела, которая подтягивает кожу, уменьшает проявления целлюлита и улучшает контуры фигуры. Радиочастотные волны стимулируют выработку коллагена.',
    price: 'от 18 000 ₽',
    duration: '90 минут',
    image: 'https://images.unsplash.com/photo-1731514721772-329626f84c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzM3NTk5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    indications: [
      'Дряблость кожи тела',
      'Целлюлит',
      'Потеря упругости',
      'Коррекция контуров',
      'Восстановление после похудения',
    ],
    contraindications: [
      'Беременность и лактация',
      'Онкология',
      'Металлические импланты в зоне воздействия',
      'Тромбофлебит',
    ],
  },
  {
    id: 'hair-mesotherapy',
    title: 'Мезотерапия волос',
    category: 'hair',
    shortDescription: 'Лечение выпадения и укрепление волос',
    description: 'Мезотерапия для волос — инъекционная методика, которая питает волосяные фолликулы, останавливает выпадение волос и стимулирует их рост. В кожу головы вводятся витаминные коктейли.',
    price: 'от 7 000 ₽',
    duration: '45 минут',
    image: 'https://images.unsplash.com/photo-1706565029539-d09af5896340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBkZXJtYXRvbG9naXN0fGVufDF8fHx8MTc3MzgxNzUzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    indications: [
      'Выпадение волос',
      'Слабые и тонкие волосы',
      'Медленный рост волос',
      'Перхоть',
      'Себорея',
    ],
    contraindications: [
      'Беременность и лактация',
      'Заболевания кожи головы в острой фазе',
      'Аллергия на компоненты препаратов',
      'Онкология',
    ],
  },
  {
    id: 'chemical-peeling',
    title: 'Химический пилинг',
    category: 'face',
    shortDescription: 'Обновление и выравнивание кожи',
    description: 'Химический пилинг удаляет ороговевшие клетки, стимулирует обновление кожи, выравнивает тон и текстуру. Подбираем глубину пилинга индивидуально.',
    price: 'от 5 000 ₽',
    duration: '50 минут',
    image: 'https://images.unsplash.com/photo-1710839465443-8671ced76e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGZhY2lhbCUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzM4MTc1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    indications: [
      'Постакне',
      'Пигментация',
      'Неровная текстура кожи',
      'Мелкие морщины',
      'Тусклый цвет лица',
    ],
    contraindications: [
      'Герпес в активной фазе',
      'Открытые раны',
      'Загар (менее 2 недель)',
      'Беременность и лактация',
    ],
  },
];

export const categoryLabels = {
  face: 'Лицо',
  body: 'Тело',
  hair: 'Волосы',
};
