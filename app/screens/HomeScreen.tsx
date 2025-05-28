import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import WorkCalendar from '../components/WorkCalendar';
import ArcProgress from '../components/ArcProgress';
import { useNavigation } from '@react-navigation/native';
import { ArrowUpRight } from 'lucide-react-native';

const HomeScreen = () => {
  const navigation = useNavigation<any>();

  const totalDays = 100;
  const daysLeft = 10;
  const progress = (totalDays - daysLeft) / totalDays;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Головна</Text>
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>До кінця семестру</Text>
          <ArcProgress progress={progress} color="#000"/>
          <Text style={styles.progressValue}>{daysLeft}</Text>
          <Text style={styles.progressSubtitle}>Днів</Text>
        </View>

        <View style={styles.cardRow}>
          <TouchableOpacity style={styles.statCard} onPress={() => navigation.navigate('CoursesScreen')}>
            <View style={styles.cardTopRow}>
              <Text style={styles.cardValue}>8</Text>
              <View style={styles.iconWrapper}><ArrowUpRight size={16} color="#000" /></View>
            </View>
            <Text style={styles.cardLabel}>Мої курси</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statCard} onPress={() => navigation.navigate('TasksScreen')}>
            <View style={styles.cardTopRow}>
              <Text style={styles.cardValue}>5</Text>
              <View style={styles.iconWrapper}><ArrowUpRight size={16} color="#000" /></View>
            </View>
            <Text style={styles.cardLabel}>Завдання</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.messageCard}>
          <View style={styles.cardTopRow}>
            <Text style={styles.messageTitle}>М. В. Кононенко</Text>
            <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')} style={styles.iconWrapper}>
              <ArrowUpRight size={16} color="#000" />
            </TouchableOpacity>
          </View>
          <Text style={styles.messageText}>
            Цього тижня 14.04.2025 в коледжі відбудуться...
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Робочий календар</Text>
        <WorkCalendar />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  progressContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  progressTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  progressValue: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  progressSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statCard: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  iconWrapper: {
    backgroundColor: '#e4e4e4',
    borderRadius: 6,
    padding: 4,
  },
  cardLabel: {
    fontSize: 14,
    color: '#555',
  },
  messageCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  messageTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  messageText: {
    color: '#444',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default HomeScreen;
