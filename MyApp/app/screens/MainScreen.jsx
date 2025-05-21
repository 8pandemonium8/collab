import axios from 'axios';
import React from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Footer from '../../components/footer';
import Header from '../../components/header';
import MainScreenCard from '../../components/MainScreenCard';
import Constants from 'expo-constants';


const getServerUrl = () => {
    const ip = Constants.expoConfig?.hostUri?.split(':')[0]; // fallback for newer SDKs
    return `http://${ip}:3000`; // your backend port
  };

const MainScreen = ({ navigation }) => {
  const [cardDatas, setCardDatas] = React.useState([]);

  const getCards = async () => {
    console.log('button working');
    try {
      console.log('get cards is being triggered');
      const serverUrl = getServerUrl();
      const response = await axios.get(`${serverUrl}/api/influencercards`);
      setCardDatas(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <ScrollView>
        <Button title="load in stuff" onPress={getCards} />
        {cardDatas.map((item) => (
          <MainScreenCard
            key={item.id}
            Name={item.Name}
            Description={item.Description}
            ImageUrl={item.Imageurl}
            RatingAvg={item.Ratings}
            NOfRatings={item.NoOfRatings}
          />
        ))}
        <View style={styles.cardContainer}></View>
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
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 10,
  },
});

export default MainScreen;
