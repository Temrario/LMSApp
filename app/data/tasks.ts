export type Task = {
  id: string;
  subject: string;
  title: string;
  issuedAt: string;
  deadline: string;
  dueIn: string;
};

export const tasksData = {
  notCompleted: [
    {
      id: '1',
      subject: 'UX-UI дизайн',
      title: 'Прототип мобільного додатку',
      issuedAt: '01.03.2025',
      deadline: '08.03.2025',
      dueIn: '2 дні',
    },
    {
      id: '2',
      subject: 'Програмування',
      title: 'Розробка REST API',
      issuedAt: '05.03.2025',
      deadline: '12.03.2025',
      dueIn: '~ 4 дні',
    },
    {
      id: '3',
      subject: 'Математика',
      title: 'Розв’язання задач з інтегралів',
      issuedAt: '06.03.2025',
      deadline: '10.03.2025',
      dueIn: '1 день',
    },
    {
      id: '4',
      subject: 'UX-UI дизайн',
      title: 'Wireframes для сайту',
      issuedAt: '02.03.2025',
      deadline: '07.03.2025',
      dueIn: '3 дні',
    },
  ],

  underReview: [
    {
      id: '5',
      subject: 'Програмування',
      title: 'Лабораторна №2: HTTP-запити',
      issuedAt: '28.02.2025',
      deadline: '05.03.2025',
      dueIn: '0 днів',
    },
    {
      id: '6',
      subject: 'Англійська мова',
      title: 'Есе на тему "Future of Technology"',
      issuedAt: '01.03.2025',
      deadline: '06.03.2025',
      dueIn: '1 день',
    },
    {
      id: '7',
      subject: 'UX-UI дизайн',
      title: 'Оцінка інтерфейсів',
      issuedAt: '04.03.2025',
      deadline: '09.03.2025',
      dueIn: '2 дні',
    },
  ],

  completed: [
    {
      id: '8',
      subject: 'Програмування',
      title: 'Лабораторна №1: Створення форми',
      issuedAt: '20.02.2025',
      deadline: '27.02.2025',
      dueIn: '0 днів',
    },
    {
      id: '9',
      subject: 'UX-UI дизайн',
      title: 'Аналіз конкурентів',
      issuedAt: '22.02.2025',
      deadline: '01.03.2025',
      dueIn: '0 днів',
    },
    {
      id: '10',
      subject: 'Математика',
      title: 'Диференціальні рівняння',
      issuedAt: '25.02.2025',
      deadline: '03.03.2025',
      dueIn: '0 днів',
    },
  ],
};
