import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../App';
import { courseDetailsMap, CourseDetails } from '../data/courseDetails';

const tabs = ['Про курс', 'Завдання', 'Учасники', 'Форум'];

type CourseDetailsRouteProp = RouteProp<RootStackParamList, 'CourseDetails'>;

const CourseDetailsScreen = () => {
  const route = useRoute<CourseDetailsRouteProp>();
  const { courseId } = route.params;
  const [activeTab, setActiveTab] = useState('Про курс');
  const [expandedBlock, setExpandedBlock] = useState<string | null>(null);

  const course: CourseDetails | undefined = courseDetailsMap[courseId];

  if (!course) {
    return <Text style={styles.notFoundText}>Курс не знайдено</Text>;
  }

  const toggleBlock = (blockName: string) => {
    setExpandedBlock((prev) => (prev === blockName ? null : blockName));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{course.description}</Text>

      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              tab === activeTab ? styles.activeTab : styles.inactiveTab,
            ]}
          >
            <Text style={[styles.tabText, tab === activeTab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.infoTitle}>Інформація</Text>
      <View style={styles.infoContainer}>
        {[
          ['тем', course.topics],
          ['лекцій', course.lectures],
          ['годин', course.hours],
        ].map(([label, count]) => (
          <View key={label} style={styles.infoCard}>
            <View style={styles.infoDot} />
            <Text style={styles.infoCount}>{count ?? 0}</Text>
            <Text style={styles.infoLabel}>{label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.sectionsSpacer} />

      {course.sections.map((section, index) => (
        <View key={`${section.title}-${index}`} style={styles.sectionWrapper}>
          <TouchableOpacity
            onPress={() => toggleBlock(section.title)}
            style={styles.accordionHeader}
          >
            <Text style={styles.accordionTitle}>{section.title}</Text>
            <Text style={styles.sectionArrow}>
              {expandedBlock === section.title ? '˅' : '›'}
            </Text>
          </TouchableOpacity>
          {expandedBlock === section.title && (
            <View style={styles.sectionContent}>
              {section.content.map((contentItem, idx) => (
                <Text key={`${section.title}-content-${idx}`} style={styles.sectionText}>
                  • {contentItem}
                </Text>
              ))}
            </View>
          )}
        </View>
      ))}

      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  notFoundText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 18,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 24,
    marginTop: 24,
    color: '#000',
  },
  tabsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingHorizontal: 16,
    marginTop: 24,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  activeTab: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  inactiveTab: {
    backgroundColor: '#fff',
    borderColor: '#d3d3d3',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
  },
  infoTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 32,
    marginLeft: 24,
    color: '#000',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  infoCard: {
    width: 96,
    height: 96,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  infoDot: {
    width: 16,
    height: 16,
    backgroundColor: '#d3d3d3',
    borderRadius: 8,
    marginBottom: 8,
  },
  infoCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  infoLabel: {
    fontSize: 12,
    color: '#666',
  },
  sectionsSpacer: {
    marginTop: 32,
  },
  accordionHeader: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 8,
  },
  accordionTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  sectionArrow: {
    fontSize: 24,
    color: '#999',
  },
  sectionWrapper: {
    marginBottom: 12,
  },
  sectionContent: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 1,
  },
  sectionText: {
    color: '#444',
    fontSize: 14,
    paddingHorizontal: 16,
    marginBottom: 6,
  },
  bottomSpacer: {
    marginBottom: 40,
  },
});

export default CourseDetailsScreen;
