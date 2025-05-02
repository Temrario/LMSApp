import React from 'react';
import { View, Text, Button, StyleSheet /*, TouchableOpacity*/ } from 'react-native';
import Header from '../components/Header';
import WorkCalendar from '../components/WorkCalendar';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to LMS App!</Text>
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        <WorkCalendar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});


// {/* Кнопка для відкриття месенджера */}
// <TouchableOpacity
// className="bg-blue-500 p-3 rounded-lg mt-4"
// onPress={() => navigation.navigate('Messenger')}
// >
// <Text className="text-white text-center font-semibold">
//   Відкрити месенджер
// </Text>
// </TouchableOpacity>

export default HomeScreen;
