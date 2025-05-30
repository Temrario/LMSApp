import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';

const ProfileScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Інформація');
  const [activeTheme, setActiveTheme] = useState('Система');
  const [notifications, setNotifications] = useState({
    updateSchedule: false,
    reapplyTasks: false,
    errorTasks: false,
    shareWindows: false,
    userMessages: false,
  });
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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
                <Text style={styles.fullName}>Ванін Михайло Юрійович</Text>
                <Text style={styles.group}>Студент(ка) групи 1П-21</Text>
                <Text style={styles.email}>someone@gmail.com</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.infoBlock}>
                <Text style={styles.label}>Ім’я</Text>
                <Text style={styles.value}>Михайло</Text>
              </View>
              <View style={styles.infoBlock}>
                <Text style={styles.label}>Прізвище</Text>
                <Text style={styles.value}>Ванін</Text>
              </View>
              <View style={styles.infoBlock}>
                <Text style={styles.label}>По батькові</Text>
                <Text style={styles.value}>Юрійович</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.infoRow}>
              <View style={styles.infoBlock}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>someone@gmail.com</Text>
              </View>
              <View style={styles.infoBlock}>
                <Text style={styles.label}>Група</Text>
                <Text style={styles.value}>ІП-21</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.infoRow}>
              <View style={styles.infoBlock}>
                <Text style={styles.label}>Номер телефону</Text>
                <Text style={styles.value}>+ (380) 96 000 00 00</Text>
              </View>
              <View style={styles.infoBlock}>
                <Text style={styles.label}>Спеціальність</Text>
                <Text style={styles.value}>121 Програмне забезпечення</Text>
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
              <TextInput style={styles.input} placeholder="Михайло" placeholderTextColor="#999" />
              <Text style={styles.label}>Прізвище</Text>
              <TextInput style={styles.input} placeholder="Ванін" placeholderTextColor="#999" />
              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.input} placeholder="someone@gmail.com" placeholderTextColor="#999" />
              <Text style={styles.label}>Номер телефону</Text>
              <TextInput style={styles.input} placeholder="+ (380) 96 000 00 00" placeholderTextColor="#999" />
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.personalInfoTitle}>Тема</Text>
            <Text style={styles.registrationDate}>Налаштуй свою тему</Text>
            <View style={styles.divider} />
            <View style={styles.themeRow}>
              {['Система', 'Світла', 'Темна', 'Комфорт для очей'].map((theme) => (
                <TouchableOpacity
                  key={theme}
                  style={styles.themeItem}
                  onPress={() => setActiveTheme(theme)}
                  activeOpacity={0.7}
                >
                  <View
                    style={[
                      styles.themeBlock,
                      activeTheme === theme && styles.themeBlockActive,
                    ]}
                  >
                    {activeTheme === theme && <View style={styles.themeIndicator} />}
                  </View>
                  <Text style={styles.themeLabel}>{theme}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.personalInfoTitle}>Налаштування сповіщень</Text>
            <View style={styles.divider} />
            <View style={styles.notificationContainer}>
              <TouchableOpacity
                style={styles.notificationRow}
                onPress={() => toggleNotification('updateSchedule')}
              >
                <Text style={styles.notificationText}>Про оновлення та заміни в розкладі</Text>
                <View style={[styles.customCheckbox, notifications.updateSchedule && styles.customCheckboxChecked]} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.notificationRow}
                onPress={() => toggleNotification('reapplyTasks')}
              >
                <Text style={styles.notificationText}>Про перереєстрацію насилишних заяв</Text>
                <View style={[styles.customCheckbox, notifications.reapplyTasks && styles.customCheckboxChecked]} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.notificationRow}
                onPress={() => toggleNotification('errorTasks')}
              >
                <Text style={styles.notificationText}>Про помилкові насилишні заявки</Text>
                <View style={[styles.customCheckbox, notifications.errorTasks && styles.customCheckboxChecked]} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.notificationRow}
                onPress={() => toggleNotification('shareWindows')}
              >
                <Text style={styles.notificationText}>Про розмилення викладачем д/з</Text>
                <View style={[styles.customCheckbox, notifications.shareWindows && styles.customCheckboxChecked]} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.notificationRow}
                onPress={() => toggleNotification('userMessages')}
              >
                <Text style={styles.notificationText}>Про повідомлення в месенджері</Text>
                <View style={[styles.customCheckbox, notifications.userMessages && styles.customCheckboxChecked]} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {activeTab === 'Безпека' && (
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.personalInfoTitle}>Пароль</Text>
            <View style={styles.securityHeader}>
              <View style={styles.securityAvatar} />
              <View>
                <Text style={styles.registrationDate}>Змінити пароль</Text>
                <Text style={styles.securityDescription}>Оновіть пароль для посилення безпеки акаунту</Text>
              </View>
            </View>
            <View style={styles.divider} />

            <View style={styles.passwordSection}>
              <Text style={styles.passwordLabel}>Поточний пароль</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.passwordInput}
                  secureTextEntry={!showCurrentPassword}
                  placeholder="••••••••••••••••"
                  placeholderTextColor="#999"
                  value={currentPassword}
                  onChangeText={setCurrentPassword}
                />
                <TouchableOpacity
                  style={styles.passwordToggle}
                  onPress={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  <View style={[styles.customCheckbox, showCurrentPassword && styles.customCheckboxChecked]} />
                </TouchableOpacity>
              </View>

              <Text style={styles.passwordLabel}>Новий пароль</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.passwordInput}
                  secureTextEntry={!showNewPassword}
                  placeholder="••••••••••••••••"
                  placeholderTextColor="#999"
                  value={newPassword}
                  onChangeText={setNewPassword}
                />
                <TouchableOpacity
                  style={styles.passwordToggle}
                  onPress={() => setShowNewPassword(!showNewPassword)}
                >
                  <View style={[styles.customCheckbox, showNewPassword && styles.customCheckboxChecked]} />
                </TouchableOpacity>
              </View>

              <Text style={styles.passwordLabel}>Підтвердити новий пароль</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.passwordInput}
                  secureTextEntry={!showConfirmPassword}
                  placeholder="••••••••••••••••"
                  placeholderTextColor="#999"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                <TouchableOpacity
                  style={styles.passwordToggle}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <View style={[styles.customCheckbox, showConfirmPassword && styles.customCheckboxChecked]} />
                </TouchableOpacity>
              </View>

              <View style={styles.passwordRequirements}>
                <Text style={styles.requirementTitle}>Пароль має містити:</Text>
                <View style={styles.requirementItem}>
                  <View style={styles.bullet} />
                  <Text style={styles.requirementText}>Принаймні 1 велику літеру</Text>
                </View>
                <View style={styles.requirementItem}>
                  <View style={styles.bullet} />
                  <Text style={styles.requirementText}>Принаймні 1 цифру</Text>
                </View>
                <View style={styles.requirementItem}>
                  <View style={styles.bullet} />
                  <Text style={styles.requirementText}>Принаймні 8 символів</Text>
                </View>
              </View>
            </View>
          </View>
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
  securityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  securityAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#d3d3d3',
    marginRight: 12,
  },
  securityDescription: {
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
  bottomSpacer: {
    height: 40,
  },
  themeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  themeItem: {
    alignItems: 'center',
    width: '48%',
    marginBottom: 12,
  },
  themeBlock: {
    width: 100,
    height: 60,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    position: 'relative',
  },
  themeBlockActive: {
    borderWidth: 2,
    borderColor: '#000',
  },
  themeIndicator: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  themeLabel: {
    marginTop: 6,
    fontSize: 14,
    color: '#000',
  },
  notificationContainer: {
    marginTop: 8,
  },
  notificationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  customCheckbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 4,
  },
  customCheckboxChecked: {
    backgroundColor: '#000',
  },
  notificationText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    marginRight: 12,
  },
  passwordSection: {
    marginTop: 12,
  },
  passwordLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 8,
    marginTop: 12,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 8,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: '#000',
  },
  passwordToggle: {
    padding: 10,
  },
  passwordRequirements: {
    marginTop: 16,
    marginBottom: 20,
  },
  requirementTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ccc',
    marginRight: 8,
  },
  requirementText: {
    fontSize: 13,
    color: '#666',
  },
});

export default ProfileScreen;
