import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RatingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Це сторінка Рейтингу</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
});

export default RatingScreen;
