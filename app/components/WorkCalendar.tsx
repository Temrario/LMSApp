import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'] as const;
const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'] as const;

type DayKey = typeof days[number];
type HourKey = typeof hours[number];
type EventType = 'lecture' | 'lab' | 'practice';

type Event = {
  subject: string;
  type: EventType;
};

const schedule: Record<DayKey, Partial<Record<HourKey, Event>>> = {
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

const typeColors: Record<EventType, string> = {
  lecture: '#AEDFF7',
  lab: '#C3F7C3',
  practice: '#FFF3B0',
};

const WorkCalendar = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.calendar}>
          <View style={styles.timeColumn}>
            <Text style={styles.emptyHeader} />
            {hours.map((hour) => (
              <Text key={hour} style={styles.hourText}>{hour}</Text>
            ))}
          </View>
          {days.map((day) => (
            <View key={day} style={styles.dayColumn}>
              <Text style={styles.dayText}>{day}</Text>
              {hours.map((hour) => {
                const event = schedule[day]?.[hour];
                return event ? (
                  <View
                    key={`${day}-${hour}`}
                    style={[
                      styles.eventBlock,
                      { backgroundColor: typeColors[event.type] ?? '#ddd' },
                    ]}
                  >
                    <Text style={styles.eventText}>{event.subject}</Text>
                  </View>
                ) : (
                  <View key={`${day}-${hour}`} style={styles.emptyBlock} />
                );
              })}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  calendar: {
    flexDirection: 'row',
  },
  timeColumn: {
    marginRight: 8,
  },
  emptyHeader: {
    height: 20,
  },
  hourText: {
    height: 50,
    textAlign: 'right',
    paddingRight: 4,
    color: '#666',
    lineHeight: 50,
  },
  dayColumn: {
    flexDirection: 'column',
    marginRight: 10,
  },
  dayText: {
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: '600',
  },
  emptyBlock: {
    height: 50,
    width: 70,
    marginVertical: 2,
    borderRadius: 4,
    backgroundColor: '#eee',
  },
  eventBlock: {
    height: 50,
    width: 70,
    marginVertical: 2,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  eventText: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default WorkCalendar;
