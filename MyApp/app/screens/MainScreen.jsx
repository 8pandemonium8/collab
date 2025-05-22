import axios from 'axios';
import React from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Footer from '../../components/footer';
import Header from '../../components/header';
import MainScreenCard from '../../components/MainScreenCard';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

const getServerUrl = () => {
    const ip = Constants.expoConfig?.hostUri?.split(':')[0];
    return `http://${ip}:3000`;
  };

const MainScreen = ({ navigation }) => {
  const [cardDatas, setCardDatas] = React.useState([]);

  const getCards = async () => {
    console.log('button working');
    try {
      console.log('get cards is being triggered');
      const serverUrl = getServerUrl();
      console.log(serverUrl)
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
            Id = {item.Id}
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
