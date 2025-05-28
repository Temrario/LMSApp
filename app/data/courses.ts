export type Course = {
  id: string;
  name: string;
  teacher: string;
  progress: number;
};

export const courses: Course[] = [
  { id: '1', name: 'UI/UX Дизайн', teacher: 'Вакуленко О.В.', progress: 0.84 },
  { id: '2', name: 'Програмування на Python', teacher: 'Іваненко І.І.', progress: 0.62 },
  { id: '3', name: 'Проєктування баз даних', teacher: 'Сидорчук С.С.', progress: 0.4 },
];

export type CourseType = {
  id: string;
  name: string;
  teacher: string;
  progress: number;
  syllabus: string[];
  sections: {
    title: string;
    tasks: string[];
  }[];
};

