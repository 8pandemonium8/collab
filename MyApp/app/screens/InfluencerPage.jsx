import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import Constants from 'expo-constants';
import React, { useState } from 'react'; // ← import useState!
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native'; // ← import Text!
import Footer from '../../components/footer';
import Header from '../../components/header';

const getServerUrl = () => {
  const ip = Constants.expoConfig?.hostUri?.split(':')[0];
  return `http://${ip}:3000`;
};

const InfluencerPage = () => {
  const route = useRoute();
  const { idParam } = route.params;

  const [influencerData, setInfluencerData] = useState(null); // ← useState to hold data

  const callApi = async () => {
    try {
      const serverUrl = getServerUrl();

      const response = await axios.get(`${serverUrl}/api/get-influencer-deets`, {
        params: { idParam },
      });

      const {Name,Description,Imageurl,NoOfRatings,Ratings,XFollowers,instaFollowers,ytSubs,} = response.data;

      console.log({ Name });
      setInfluencerData(response.data); // ← save it to state
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Influencer Page" />
      <Button title="load in this bitch" onPress={callApi} />
      {influencerData && (
        <Text style={{ fontSize: 18, marginTop: 20 }}>{influencerData.Name}</Text>
      )}
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default InfluencerPage;