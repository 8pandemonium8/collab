import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/header';
import MainScreenCard from '../components/MainScreenCard'

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style = {styles.cardContainer}>
      <MainScreenCard/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer : {
    flex: 1,
    flexDirection : 'column',
    alignItems: 'center',
  }
});

export default MainScreen;

