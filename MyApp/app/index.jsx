import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/header';
import MainScreenCard from '../components/MainScreenCard'
import Footer from '../components/footer';


const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style = {styles.cardContainer}>
      <MainScreenCard/>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1, // this pushes footer to the bottom
    padding: 10,
  },
  cardContainer : {
    flex: 1,
    flexDirection : 'column',
    alignItems: 'center',
  }
});

export default MainScreen;
