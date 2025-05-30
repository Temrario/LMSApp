import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('Інформація');
  const [activeTheme, setActiveTheme] = useState('Система'); // Стан для активної теми

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Особистий кабінет</Text>

      <View style={styles.tabsContainer}>
        {['Інформація', 'Налаштування', 'Безпека'].map((tab) => (
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

      {activeTab === 'Інформація' && (
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.personalInfoTitle}>Персональна інформація</Text>
            <Text style={styles.registrationDate}>Зареєстрована з 11 вересня 2020 року</Text>
            <View style={styles.divider} />

            <View style={styles.profileRow}>
              <View style={styles.avatar} />
              <View style={styles.profileTextContainer}>
                <Text style={styles.fullName}>Афанасьєва Дар’я Олександрівна</Text>
                <Text style={styles.group}>Студентка групи ІД-21</Text>
                <Text style={styles.email}>afonydaria@gmail.com</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.infoBlock}>
                <Text style={styles.label}>Ім’я</Text>
                <Text style={styles.value}>Дар’я</Text>
              </View>
              <View style={styles.infoBlock}>
                <Text style={styles.label}>Прізвище</Text>
                <Text style={styles.value}>Афанасьєва</Text>
              </View>
              <View style={styles.infoBlock}>
                <Text style={styles.label}>По батькові</Text>
                <Text style={styles.value}>Олександрівна</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.infoRow}>
              <View style={styles.infoBlock}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>afonydaria@gmail.com</Text>
              </View>
              <View style={styles.infoBlock}>
                <Text style={styles.label}>Група</Text>
                <Text style={styles.value}>ІД-21</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.infoRow}>
              <View style={styles.infoBlock}>
                <Text style={styles.label}>Номер телефону</Text>
                <Text style={styles.value}>+ (380) 93 109 18 03</Text>
              </View>
              <View style={styles.infoBlock}>
                <Text style={styles.label}>Спеціальність</Text>
                <Text style={styles.value}>022 Дизайн</Text>
              </View>
            </View>
          </View>
        </View>
      )}

      {activeTab === 'Налаштування' && (
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.personalInfoTitle}>Особистий кабінет</Text>
            <View style={styles.divider} />
            <View style={styles.avatarSection}>
              <View style={styles.avatar} />
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.changePhotoButton}>
                  <Text style={styles.buttonText}>Змінити фото</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deletePhotoButton}>
                  <Text style={styles.deleteButtonText}>Видалити</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.label}>Ім’я</Text>
              <TextInput style={styles.input} placeholder="Дар’я" placeholderTextColor="#999" />
              <Text style={styles.label}>Прізвище</Text>
              <TextInput style={styles.input} placeholder="Афанасьєва" placeholderTextColor="#999" />
              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.input} placeholder="afonydaria@gmail.com" placeholderTextColor="#999" />
              <Text style={styles.label}>Номер телефону</Text>
              <TextInput style={styles.input} placeholder="+ (380) 93 109 18 03" placeholderTextColor="#999" />
            </View>
          </View>

          {/* Нова секція "Тема" */}
          <View style={styles.card}>
            <Text style={styles.personalInfoTitle}>Тема</Text>
            <Text style={styles.registrationDate}>Налаштуй свою тему</Text>
            <View style={styles.divider} />
            <View style={styles.themeRow}>
              <TouchableOpacity
                style={[
                  styles.themeItem,
                  activeTheme === 'Система' && styles.themeActive,
                  activeTheme === 'Система' && styles.themeHover,
                ]}
                onPress={() => setActiveTheme('Система')}
              >
                <View style={styles.themeBlock}>
                  {activeTheme === 'Система' && <View style={styles.themeIndicator} />}
                </View>
                <Text style={styles.themeLabel}>Система</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.themeItem,
                  activeTheme === 'Світла' && styles.themeActive,
                  activeTheme === 'Світла' && styles.themeHover,
                ]}
                onPress={() => setActiveTheme('Світла')}
              >
                <View style={styles.themeBlock} />
                <Text style={styles.themeLabel}>Світла</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.themeRow}>
              <TouchableOpacity
                style={[
                  styles.themeItem,
                  activeTheme === 'Темна' && styles.themeActive,
                  activeTheme === 'Темна' && styles.themeHover,
                ]}
                onPress={() => setActiveTheme('Темна')}
              >
                <View style={styles.themeBlock} />
                <Text style={styles.themeLabel}>Темна</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.themeItem,
                  activeTheme === 'Комфорт для очей' && styles.themeActive,
                  activeTheme === 'Комфорт для очей' && styles.themeHover,
                ]}
                onPress={() => setActiveTheme('Комфорт для очей')}
              >
                <View style={styles.themeBlock} />
                <Text style={styles.themeLabel}>Комфорт для очей</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {activeTab === 'Безпека' && (
        <View style={styles.content}>
          <Text style={styles.placeholderText}>Безпека ще не реалізовано.</Text>
        </View>
      )}

      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    paddingHorizontal: 16,
    marginTop: 20,
    color: '#000',
  },
  tabsContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  activeTab: {
    backgroundColor: '#000',
    width: '80%',
    alignSelf: 'flex-start',
  },
  inactiveTab: {
    backgroundColor: '#fff',
    width: '100%',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  activeTabText: {
    color: '#fff',
  },
  content: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  personalInfoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  registrationDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 12,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ccc',
  },
  profileTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  fullName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  group: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  email: {
    fontSize: 14,
    color: '#999',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 8,
  },
  infoBlock: {
    flex: 1,
  },
  label: {
    fontSize: 13,
    color: '#888',
  },
  value: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    marginTop: 4,
  },
  avatarSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 30,
  },
  changePhotoButton: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 8,
    width: 140,
    alignItems: 'center',
  },
  deletePhotoButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 140,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
  },
  deleteButtonText: {
    fontSize: 14,
    color: '#000',
  },
  inputSection: {
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    fontSize: 14,
    color: '#000',
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
  bottomSpacer: {
    height: 40,
  },
  themeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  themeItem: {
    alignItems: 'center',
  },
  themeBlock: {
    width: 100,
    height: 60,
    backgroundColor: '#d3d3d3',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  themeLabel: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
    marginTop: 4,
  },
  themeActive: {
    borderColor: '#000',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Для Android
  },
  themeHover: {
    backgroundColor: '#c0c0c0', // Легке затемнення при натисканні
  },
});

export default ProfileScreen;
