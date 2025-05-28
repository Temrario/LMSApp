import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { launchImageLibrary, Asset } from 'react-native-image-picker';
import { Task } from '../data/tasks';

type TaskDetailsRouteProp = RouteProp<{ params: { task: Task } }, 'params'>;

const TaskDetailsScreen = () => {
  const { task } = useRoute<TaskDetailsRouteProp>().params;

  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileUpload = () => {
    launchImageLibrary(
      {
        mediaType: 'mixed', // дозволяє вибирати фото та відео
      },
      (response) => {
        if (response.didCancel) {
          // Користувач скасував вибір
          return;
        }
        if (response.errorCode) {
          Alert.alert('Помилка', response.errorMessage ?? 'Сталася помилка при виборі файлу');
          return;
        }

        const file: Asset | undefined = response.assets?.[0];
        if (file) {
          setFileName(file.fileName ?? 'Невідомий файл');
          Alert.alert('Файл вибрано', `Ім'я: ${file.fileName ?? 'Невідомий файл'}`);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subject}>{task.subject}</Text>
      <Text style={styles.title}>{task.title}</Text>
      <View style={styles.infoBlock}>
        <Text style={styles.label}>Видано: {task.issuedAt}</Text>
        <Text style={styles.label}>Дедлайн: {task.deadline}</Text>
        <Text style={styles.label}>До здачі: {task.dueIn}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleFileUpload}>
        <Text style={styles.buttonText}>Завантажити файл</Text>
      </TouchableOpacity>

      {fileName && (
        <View style={styles.fileInfo}>
          <Text style={styles.fileText}>Вибраний файл: {fileName}</Text>
          <Text style={styles.fakeUploadNote}>* Імітація завантаження — файл не зберігається</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaeaea',
    flex: 1,
    padding: 16,
  },
  subject: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  infoBlock: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 6,
  },
  button: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  fileInfo: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
  },
  fileText: {
    color: '#333',
    fontSize: 14,
  },
  fakeUploadNote: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});

export default TaskDetailsScreen;
