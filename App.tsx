import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import CoursesScreen from './app/screens/CoursesScreen';
import TasksScreen from './app/screens/TasksScreen';
import NewsScreen from './app/screens/NewsScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import RatingScreen from './app/screens/RatingScreen';
import CourseDetailsScreen from './app/screens/CourseDetailsScreen';
import Header from './app/components/Header';


export type CourseType = {
  title: string;
  topics: number;
  lectures: number;
  hours: number;
  syllabus: { title: string; subtitle: string }[];
  sections: string[];
};

export type Task = {
  id: string;
  subject: string;
  title: string;
  issuedAt: string;
  deadline: string;
  dueIn: string;
};

export type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  CoursesScreen: undefined;
  TasksScreen: undefined;
  NewsScreen: undefined;
  ProfileScreen: undefined;
  RatingScreen: undefined;
  CourseDetails: { courseId: string };
   TaskDetails: { task: Task };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const renderHeader = (props: NativeStackHeaderProps) => <Header {...props} />;

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
              header: renderHeader,
            }}
          >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="CoursesScreen" component={CoursesScreen} />
            <Stack.Screen name="TasksScreen" component={TasksScreen} />
            <Stack.Screen name="NewsScreen" component={NewsScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="RatingScreen" component={RatingScreen} />
            <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} options={{ title: 'Курс' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
