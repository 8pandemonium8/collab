import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/header';
<<<<<<< Updated upstream
import MainScreenCard from '../components/MainScreenCard'
=======
import Footer from '../components/footer';
>>>>>>> Stashed changes

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
<<<<<<< Updated upstream
      <View style = {styles.cardContainer}>
      <MainScreenCard/>
      </View>
    </View>
=======

      {/* Main scrollable or content area */}
      <View style={styles.content}>
        {/* Your middle page content goes here */}
      </View>

      <Footer />
    </SafeAreaView>
>>>>>>> Stashed changes
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
