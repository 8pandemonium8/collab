import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Settings"/>
      
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Settings</Text>
        {/* Add setting toggles or preferences here */}
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
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#004aad',
  },
});

export default Settings;
