import axios from 'axios';
import Constants from 'expo-constants';
import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Footer from '../../components/footer';
import Header from '../../components/header';
import MainScreenCard from '../../components/MainScreenCard';

const getServerUrl = () => {
  const ip = Constants.expoConfig?.hostUri?.split(':')[0];
  return `http://${ip}:3000`;
};

const MainScreen = ({ navigation }) => {
  const [cardDatas, setCardDatas] = React.useState([]);

  const getCards = async () => {
    try {
      const serverUrl = getServerUrl();
      const response = await axios.get(`${serverUrl}/api/influencercards`);
      setCardDatas(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cardContainer}>
          {cardDatas.map((item, index) => (
            <MainScreenCard
              Id={item.Id}
              key={item.Id}
              index={index}
              Name={item.Name}
              ImageUrl={item.Imageurl}
              ytSubs={item.ytSubs}
              instaFollowers={item.instaFollowers}
              XFollowers={item.XFollowers}
              fbFollowers={item.fbFollowers}
              hashtags={item.hashtags}
            />
          ))}
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,         // Allows ScrollView content to grow and be centered
    justifyContent: 'center',
    alignItems: 'center', // center horizontally
    paddingVertical: 10,
  },
  cardContainer: {
    width: '100%',       // So cards can use full width if needed
    alignItems: 'center',
  },
});

export default MainScreen;