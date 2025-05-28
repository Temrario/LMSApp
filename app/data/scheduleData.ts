export const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'] as const;
export const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'] as const;

export type DayKey = typeof days[number];
export type HourKey = typeof hours[number];
export type EventType = 'lecture' | 'lab' | 'practice';

export type Event = {
  subject: string;
  type: EventType;
};

export const schedule: Record<DayKey, Partial<Record<HourKey, Event>>> = {
  Пн: {
    '08:00': { subject: 'Математика', type: 'lecture' },
    '10:00': { subject: 'Фізика', type: 'lab' },
  },
  Вт: {
    '09:00': { subject: 'Інформатика', type: 'lecture' },
    '12:00': { subject: 'Англійська', type: 'practice' },
  },
  Ср: {
    '08:00': { subject: 'Історія', type: 'lecture' },
    '11:00': { subject: 'Біологія', type: 'lab' },
  },
  Чт: {
    '09:00': { subject: 'Хімія', type: 'lecture' },
    '13:00': { subject: 'Фізкультура', type: 'practice' },
  },
  Пт: {
    '08:00': { subject: 'Дизайн', type: 'lecture' },
    '10:00': { subject: 'Програмування', type: 'lab' },
  },
};
