import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MoreHorizontal } from 'lucide-react-native';
import Header from '../components/Header';

const CoursesScreen = () => {
  const navigation = useNavigation<any>();

  const courses = [
    { id: '1', name: 'UX-UI Дизайн', teacher: 'Вакуленко О.В.', progress: 0.84 },
    { id: '2', name: 'UX-UI Дизайн', teacher: 'Вакуленко О.В.', progress: 0.84 },
    { id: '3', name: 'UX-UI Дизайн', teacher: 'Вакуленко О.В.', progress: 0.84 },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Мої курси</Text>
        {courses.map((course) => (
          <View key={course.id} style={styles.courseCard}>
            <View style={styles.cardTopRow}>
              <Text style={styles.courseTitle}>{course.name}</Text>
              <TouchableOpacity
                style={styles.iconWrapper}
                onPress={() => navigation.navigate('CourseDetails', { courseId: course.id })}
              >
                <MoreHorizontal size={16} color="#000" />
              </TouchableOpacity>
            </View>
            <Text style={styles.teacherText}>Викладач: {course.teacher}</Text>
            <View style={styles.progressContainer}>
              <View style={styles.circlesContainer}>
                {[...Array(5)].map((_, i) => (
                  <View key={`circle-${course.id}-${i}`} style={styles.circle} />
                ))}
              </View>
              <View style={styles.progressWrapper}>
                <View style={[styles.progressBar, { width: `${course.progress * 100}%` }]} />
              </View>
              <Text style={styles.progressText}>Прогрес</Text>
              <Text style={styles.progressPercentage}>{Math.round(course.progress * 100)}%</Text>
            </View>
          </View>
        ))}
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
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  iconWrapper: {
    backgroundColor: '#e4e4e4',
    borderRadius: 6,
    padding: 4,
  },
  teacherText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circlesContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d3d3d3',
    marginHorizontal: 2,
  },
  progressWrapper: {
    flex: 1,
    height: 8,
    backgroundColor: '#d3d3d3',
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#000',
    borderRadius: 50,
  },
  progressText: {
    fontSize: 14,
    color: '#555',
    marginRight: 8,
  },
  progressPercentage: {
    fontSize: 14,
    color: '#555',
  },
});

export default CoursesScreen;
