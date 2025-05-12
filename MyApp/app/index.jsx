import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/header';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* Add the rest of your page components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;

