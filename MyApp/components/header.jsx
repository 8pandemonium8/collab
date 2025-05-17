import React from 'react';
import { Dimensions, View, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // or 'react-native-vector-icons/Ionicons'

const Header = () => {
  const { width } = Dimensions.get('window');
  const rawSize = width * 0.25;
  const logoSize = Math.min(Math.max(rawSize, 50), 120)
  return (
    <View style={styles.headerContainer}>
            <Image
        source={require('../assets/images/logo.png')} // replace with your logo path
        style={[styles.logo, {width: logoSize, height: logoSize}]}
      />

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.plusButton}>
          <Ionicons name="add" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#004aad', // light blue
    paddingTop: 0,
    paddingBottom: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0051ff',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '100%',
    position: 'relative',
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#333',
  },
  plusButton: {
    position: 'absolute',
    right: -10,
    top: -10,
    backgroundColor: '#dcd3f7',
    borderRadius: 20,
    padding: 6,
    elevation: 2,
  },  
  logo: {
    resizeMode: 'contain',
    alignSelf: 'center',
  }
  
});

export default Header;
