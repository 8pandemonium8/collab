import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        accessibilityLabel="Go to Home"
        activeOpacity={0.7}
      >
        <Icon name="home" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Chat')}
        accessibilityLabel="Go to Chat"
        activeOpacity={0.7}
      >
        <Icon name="chatbubble" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        accessibilityLabel="Go to Profile"
        activeOpacity={0.7}
      >
        <Icon name="person" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        accessibilityLabel="Go to Settings"
        activeOpacity={0.7}
      >
        <Icon name="settings" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#004aad',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

export default Footer;

