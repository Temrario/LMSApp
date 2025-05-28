import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MoreHorizontal } from 'lucide-react-native';
import { courses as initialCourses } from '../data/courses';
import Svg, { Path } from 'react-native-svg';

const WaveSeparator = () => (
  <Svg
    height={40}
    width="100%"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    style={styles.wave}
  >
    <Path
      fill="#f3f3f3"
      d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,133.3C672,160,768,192,864,192C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    />
  </Svg>
);

const CoursesScreen = () => {
  const navigation = useNavigation<any>();
  const [courses, setCourses] = useState(initialCourses);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const moveCourse = (direction: 'up' | 'down') => {
    if (selectedIndex === null) {
      return;
    }

    const newCourses = [...courses];
    const targetIndex = direction === 'up' ? selectedIndex - 1 : selectedIndex + 1;

    // Swap elements
    if (targetIndex >= 0 && targetIndex < newCourses.length) {
      const temp = newCourses[selectedIndex];
      newCourses[selectedIndex] = newCourses[targetIndex];
      newCourses[targetIndex] = temp;
      setCourses(newCourses);
      setSelectedIndex(targetIndex);
    }

    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>Мої курси</Text>
          <WaveSeparator />
        </View>

        {courses.map((course, index) => {
          const isEven = index % 2 === 0;
          const courseCardStyle = [
            styles.courseCard,
            isEven ? styles.bgGray : styles.bgWhite,
            index === 0 && styles.firstCard,
            index === courses.length - 1 && styles.lastCard,
          ];

          return (
            <TouchableOpacity
              key={course.id}
              style={courseCardStyle}
              onPress={() => navigation.navigate('CourseDetails', { courseId: course.id })}
              activeOpacity={0.8}
            >
              <View style={styles.cardTopRow}>
                <Text style={styles.courseTitle}>{course.name}</Text>
                <TouchableOpacity
                  style={styles.iconWrapper}
                  onPress={() => {
                    setSelectedIndex(index);
                    setModalVisible(true);
                  }}
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
                <Text style={styles.progressPercentage}>
                  {Math.round(course.progress * 100)}%
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Modal для вибору дії */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            {selectedIndex! > 0 && (
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => moveCourse('up')}
              >
                <Text style={styles.modalButtonText}>Перемістити вгору</Text>
              </TouchableOpacity>
            )}
            {selectedIndex! < courses.length - 1 && (
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => moveCourse('down')}
              >
                <Text style={styles.modalButtonText}>Перемістити вниз</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCancel}>Скасувати</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  content: {
    paddingBottom: 32,
  },
  headerWrapper: {
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 48,
    position: 'relative',
    zIndex: 1,
  },
  wave: {
    position: 'absolute',
    top: -40,
    left: 0,
    right: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    zIndex: 2,
    position: 'relative',
  },
  courseCard: {
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bgGray: {
    backgroundColor: '#d9d9d9',
  },
  bgWhite: {
    backgroundColor: '#ffffff',
  },
  firstCard: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  lastCard: {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  courseTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: '#000',
  },
  iconWrapper: {
    backgroundColor: '#e4e4e4',
    borderRadius: 6,
    padding: 4,
  },
  teacherText: {
    fontSize: 12,
    color: '#000',
    marginBottom: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  circlesContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e6e6e6',
    marginHorizontal: 2,
  },
  progressWrapper: {
    flex: 1,
    height: 4,
    backgroundColor: '#e6e6e6',
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 8,
    marginTop: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#000000',
    borderRadius: 50,
  },
  progressText: {
    fontSize: 12,
    color: '#000',
    marginRight: 8,
    marginTop: 8,
  },
  progressPercentage: {
    fontSize: 12,
    color: '#000',
    marginTop: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    width: 250,
    alignItems: 'stretch',
  },
  modalButton: {
    paddingVertical: 12,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#007aff',
    textAlign: 'center',
  },
  modalCancel: {
    marginTop: 8,
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  },
});

export default CoursesScreen;
