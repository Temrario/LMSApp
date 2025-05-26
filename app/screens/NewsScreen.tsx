import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';

const NewsScreen = () => {
  const newsItems = [
    {
      id: '1',
      author: 'Андрій Сергіпович Гордійко',
      role: 'Благодійний секретар приймальної комісії',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus...',
      hasImage: false,
    },
    {
      id: '2',
      author: 'Андрій Сергіпович Гордійко',
      role: 'Благодійний секретар приймальної комісії',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus...',
      hasImage: true,
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>НОВИНИ</Text>
        </View>

        {newsItems.map((item) => (
          <View key={item.id} style={styles.newsCard}>
            <View style={styles.cardTopRow}>
              <View style={styles.avatar} />
              <View>
                <Text style={styles.authorText}>{item.author}</Text>
                <Text style={styles.roleText}>{item.role}</Text>
              </View>
            </View>

            {item.hasImage && <View style={styles.newsImage} />}

            <Text style={styles.newsContent}>{item.content}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9ec',
  },
  content: {
    padding: 16,
  },
  titleContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 4,
    paddingBottom: 8,
    marginBottom: 8,
    },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  newsCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#cfcfcf',
    marginRight: 12,
  },
  authorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  roleText: {
    fontSize: 14,
    color: '#555',
  },
  newsImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#d3d3d3',
  },
  newsContent: {
    fontSize: 14,
    color: '#444',
  },
});

export default NewsScreen;
