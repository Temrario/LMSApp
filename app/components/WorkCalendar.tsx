import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'];
const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'];

const WorkCalendar = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Робочий календар</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.calendar}>
          <View style={styles.timeColumn}>
            {hours.map((hour, idx) => (
              <Text key={idx} style={styles.hourText}>{hour}</Text>
            ))}
          </View>
          {days.map((day, idx) => (
            <View key={idx} style={styles.dayColumn}>
              <Text style={styles.dayText}>{day}</Text>
              {hours.map((_, i) => (
                <View key={i} style={styles.timeBlock} />
              ))}
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  calendar: {
    flexDirection: 'row',
  },
  timeColumn: {
    marginRight: 8,
  },
  hourText: {
    height: 50,
    textAlign: 'right',
    paddingRight: 4,
    color: '#666',
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
  timeBlock: {
    height: 50,
    width: 40,
    marginVertical: 2,
    borderRadius: 4,
    backgroundColor: '#eee',
  },
});

export default WorkCalendar;
