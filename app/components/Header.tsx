import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import ListIcon from '../assets/list.svg';
import SearchIcon from '../assets/search.svg';

const Header: React.FC<{ navigation?: any }> = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const menuItems = [
    { id: '1', title: 'Головна', screen: 'HomeScreen' },
    { id: '2', title: 'Курси', screen: 'CoursesScreen' },
    { id: '3', title: 'Рейтинг', screen: 'RatingScreen' },
    { id: '4', title: 'Профіль', screen: 'ProfileScreen' },
  ];

  const handleMenuItemPress = (screen: string) => {
    if (navigation) {
      navigation.navigate(screen);
    }
    setMenuVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton} onPress={() => setMenuVisible(true)}>
        <ListIcon width={24} height={24} />
      </TouchableOpacity>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Пошук..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.searchButton}>
          <SearchIcon width={16} height={16} />
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={menuVisible}
        animationType="slide"
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setMenuVisible(false)}
        >
          <View style={styles.menuContainer}>
            <FlatList
              data={menuItems}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleMenuItemPress(item.screen)}
                >
                  <Text style={styles.menuItemText}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconButton: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 16,
    backgroundColor: '#f4f4f4',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 4,
    color: '#000',
  },
  searchButton: {
    backgroundColor: '#000',
    padding: 6,
    borderRadius: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  menuContainer: {
    width: '70%',
    height: '100%',
    backgroundColor: '#d3d3d3',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  menuItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuItemText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
  },
});

export default Header;
