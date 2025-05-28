export type NewsItem = {
  id: string;
  courseId: string;
  title: string;
  date: string;
  summary: string;
  url?: string;
};

export const newsData: NewsItem[] = [
  {
    id: '1',
    courseId: '1',
    title: 'Новий модуль про анімації у UI/UX дизайні',
    date: '22.05.2025',
    summary: 'Додано новий розділ з основами анімації для покращення інтерфейсів у курсі UI/UX Дизайн.',
    url: 'https://example.com/news/ui-ux-animation',
  },
  {
    id: '2',
    courseId: '1',
    title: 'Вебінар з UX-досліджень',
    date: '18.05.2025',
    summary: 'Запрошуємо на вебінар, де розкажуть про методи UX-досліджень і юзабіліті тестування.',
  },
  {
    id: '3',
    courseId: '2',
    title: 'Оновлення матеріалів з роботи з файлами в Python',
    date: '20.05.2025',
    summary: 'Додано нові приклади та завдання з роботи з файлами у курсі Програмування на Python.',
    url: 'https://example.com/news/python-file-handling',
  },
  {
    id: '4',
    courseId: '2',
    title: 'Запуск марафону з Python автоматизації',
    date: '15.05.2025',
    summary: 'Починається марафон для практичного опанування автоматизації на Python.',
  },
  {
    id: '5',
    courseId: '3',
    title: 'Нові приклади ER-діаграм для курсу Проєктування баз даних',
    date: '21.05.2025',
    summary: 'Додано розширений матеріал з ER-діаграм для кращого розуміння структури баз даних.',
  },
  {
    id: '6',
    courseId: '3',
    title: 'Вебінар з оптимізації SQL-запитів',
    date: '17.05.2025',
    summary: 'Запрошуємо взяти участь у вебінарі, присвяченому оптимізації SQL-запитів для покращення продуктивності.',
    url: 'https://example.com/news/sql-optimization',
  },
];
