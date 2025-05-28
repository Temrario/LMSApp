import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { tasksData } from '../data/tasks';


interface Task {
  id: string;
  title: string;
  subject: string;
  issuedAt: string;
  deadline: string;
  dueIn: string;
}

const Tabs = ['Не виконані', 'На перевірці', 'Виконані'];

const TasksScreen = () => {
  const [activeTab, setActiveTab] = useState('Не виконані');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  const getTasksByTab = (): Task[] => {
    let tasks: Task[] = [];
    switch (activeTab) {
      case 'Не виконані': {
        tasks = tasksData.notCompleted;
        break;
      }
      case 'На перевірці': {
        tasks = tasksData.underReview;
        break;
      }
      case 'Виконані': {
        tasks = tasksData.completed;
        break;
      }
    }

    // Фільтр пошуку
    if (searchQuery.trim()) {
      tasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Сортування за назвою
    tasks.sort((a, b) => {
      if (sortAsc) {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

    return tasks;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Мої завдання</Text>

      <View style={styles.tabContainer}>
        {Tabs.map(tab => {
          const isActive = activeTab === tab;
          return (
            <TouchableOpacity
              key={tab}
              style={[styles.tabButton, isActive && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Пошук..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity
          style={styles.subjectButton}
          onPress={() => setSortAsc(prev => !prev)}
        >
          <Text style={styles.searchText}>
            Сортувати {sortAsc ? '↑' : '↓'}
          </Text>
        </TouchableOpacity>
      </View>

      {getTasksByTab().map(task => (
        <View key={task.id} style={styles.taskCard}>
          <View style={styles.taskTop}>
            <Text style={styles.subject}>{task.subject}</Text>
            <Text style={styles.titleText}>{task.title}</Text>
          </View>
          <View style={styles.taskBottom}>
            <Text style={styles.date}>Видано: {task.issuedAt}</Text>
            <Text style={styles.date}>Дедлайн: {task.deadline}</Text>
            <Text style={styles.due}>До здачі: {task.dueIn}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaeaea',
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 16,
    color: '#000',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#000',
  },
  tabText: {
    color: '#000',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '600',
  },
  searchRow: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    flex: 1,
  },
  subjectButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    width: 120,
    alignItems: 'center',
  },
  searchText: {
    color: '#000',
  },
  taskCard: {
    backgroundColor: '#c2c2c2',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  taskTop: {
    backgroundColor: '#fff',
    padding: 12,
  },
  subject: {
    fontSize: 12,
    color: '#333',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  taskBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
  date: {
    fontSize: 12,
    color: '#000',
  },
  due: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
});

export default TasksScreen;
