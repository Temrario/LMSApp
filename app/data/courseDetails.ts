export type CourseDetails = {
  id: string;
  description: string;
  topics: number;
  lectures: number;
  hours: number;
  sections: {
    title: string;
    content: string[];
  }[];
};

export const courseDetailsMap: Record<string, CourseDetails> = {
  '1': {
    id: '1',
    description: 'UI/UX Дизайн',
    topics: 25,
    lectures: 50,
    hours: 72,
    sections: [
      {
        title: 'Силабус',
        content: [
          '• Посилання: Тема 1',
          '• Посилання: Тема 2',
          '• Посилання: Тема 3',
        ],
      },
      {
        title: 'Теоретичні відомості',
        content: [
          'Огляд основ дизайну',
          'Принципи UX/UI',
          'Інструменти для проектування',
        ],
      },
      {
        title: 'Практичні та індивідуальні завдання',
        content: [
          'Створення прототипів',
          'Виконання індивідуальних проектів',
          'Практичні вправи з юзабіліті тестування',
        ],
      },
      {
        title: 'Контроль',
        content: [
          'Тестування знань',
          'Підсумковий проєкт',
        ],
      },
    ],
  },
};
