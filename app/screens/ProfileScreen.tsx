import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('Інформація');

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
          {/* Персональна інформація */}
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

          {/* Блок Email + Група */}
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

          {/* Блок Номер телефону + Спеціальність */}
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
          <Text style={styles.placeholderText}>Налаштування ще не реалізовано.</Text>
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
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc',
    marginRight: 16,
  },
  profileTextContainer: {
    flex: 1,
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
  placeholderText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginTop: 24,
  },
  bottomSpacer: {
    height: 40,
  },
});

export default ProfileScreen;
