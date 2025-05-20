import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    { name: 'Home', icon: 'home', screen: 'Home' },
    { name: 'Chat', icon: 'chatbubble', screen: 'Chat' },
    { name: 'Profile', icon: 'person', screen: 'Profile' },
    { name: 'Settings', icon: 'settings', screen: 'Settings' },
    { name: 'Temp', icon: 'eye', screen: 'Temp' }, 
  ];

  return (
    <View style={styles.container}>
      {isOpen &&
        options.map((option, index) => (
          <TouchableOpacity
            key={option.name}
            style={[styles.optionButton, { bottom: 80 + index * 60 }]}
            onPress={() => {
              setIsOpen(false);
              navigation.navigate(option.screen);
            }}
            activeOpacity={0.8}
          >
            <Icon name={option.icon} size={24} color="#fff" />
          </TouchableOpacity>
        ))}

      <TouchableOpacity
        style={styles.fab}
        onPress={toggleMenu}
        activeOpacity={0.9}
      >
        <Icon name={isOpen ? 'close' : 'add'} size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#004aad',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  optionButton: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#004aad',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 30,
    elevation: 4,
  },
  optionText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
  },
});

export default Footer;
