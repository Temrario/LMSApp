import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import ListIcon from '../assets/list.svg';
import SearchIcon from '../assets/search.svg';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
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
});

export default Header;
