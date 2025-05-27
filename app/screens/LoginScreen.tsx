import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Login to LMS App</Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <Button title="Login" onPress={() => console.log('Login Pressed')} />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default LoginScreen;
