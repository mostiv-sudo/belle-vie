export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  education: string;
  photo: string;
  achievements: string[];
}

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Иванова Елена Сергеевна',
    specialization: 'Врач-дерматокосметолог',
    experience: '12 лет',
    education: 'РНИМУ им. Н.И. Пирогова',
    photo: 'https://images.unsplash.com/photo-1706565029539-d09af5896340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBkZXJtYXRvbG9naXN0fGVufDF8fHx8MTc3MzgxNzUzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    achievements: [
      'Сертификат по инъекционным методикам',
      'Специализация на лазерных технологиях',
      'Более 5000 успешных процедур',
      'Член Общества эстетической медицины',
    ],
  },
  {
    id: '2',
    name: 'Петрова Анна Владимировна',
    specialization: 'Врач-косметолог, трихолог',
    experience: '8 лет',
    education: 'Первый МГМУ им. И.М. Сеченова',
    photo: 'https://images.unsplash.com/photo-1556227997-e90840afbf40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM4MTc1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    achievements: [
      'Эксперт по мезотерапии',
      'Сертификат по трихологии',
      'Работа с препаратами премиум-класса',
      'Индивидуальный подход к каждому пациенту',
    ],
  },
  {
    id: '3',
    name: 'Смирнова Мария Александровна',
    specialization: 'Врач-дерматовенеролог, косметолог',
    experience: '15 лет',
    education: 'РУДН',
    photo: 'https://images.unsplash.com/photo-1763472051866-2e627b1800ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHByb2NlZHVyZSUyMHdvbWFufGVufDF8fHx8MTc3MzgxNzUzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    achievements: [
      'Кандидат медицинских наук',
      'Специалист по аппаратной косметологии',
      'Стаж в ведущих клиниках Москвы',
      'Регулярное обучение за рубежом',
    ],
  },
];
