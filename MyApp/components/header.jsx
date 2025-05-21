import React, { useState } from 'react';
import { Dimensions, View, Image, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ title }) => {
  const { width } = Dimensions.get('window');
  const logoSize = Math.min(Math.max(width * 0.1, 30), 60);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.topRow}>
        <Image
          source={require('../assets/images/logo.png')}
          style={[styles.logo, { width: logoSize, height: logoSize }]}
        />

        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <TouchableOpacity onPress={() => setShowSearch(prev => !prev)}>
          <Ionicons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {showSearch && (
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#004aad',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    transform: [{ scale: 1.5}],
    alignSelf: 'center',
  },
  titleWrapper: {
    position: 'relative',
  },
  title: {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
  fontStyle: 'italic',
  fontFamily: 'Genty',
  textShadowColor: 'black',
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginTop: 12,
    width: '100%',
    position: 'relative',
  },
  searchIcon: {
    marginRight: 8,
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
    backgroundColor: '#e5dcff',
    borderRadius: 20,
    padding: 6,
    elevation: 2,
  },
});

export default Header;
