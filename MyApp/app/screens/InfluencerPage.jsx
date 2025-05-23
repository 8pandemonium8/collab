import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react';
import {SafeAreaView,StyleSheet,Text,View,Image,ScrollView} from 'react-native';
import Header from '../../components/header';
import Footer from '../../components/footer';
import RtgReview from '../../components/rtgreview';
import DescExpect from '../../components/descexpect';
import InteractButtons from '../../components/interactbuttons';
import Socials from '../../components/socials';
import HashtagList from '../../components/hashtag';

const getServerUrl = () => {
  const ip = Constants.expoConfig?.hostUri?.split(':')[0];
  return `http://${ip}:3000`;
};

const InfluencerPage = () => {
  const route = useRoute();
  const { idParam } = route.params;
  const [influencerData, setInfluencerData] = useState(null);

  useEffect(() => {
    callApi();
  });

  const callApi = async () => {
    try {
      const serverUrl = getServerUrl();
      const response = await axios.get(`${serverUrl}/api/get-influencer-deets`, {
        params: { idParam },
      });
      setInfluencerData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!influencerData) return null;

  const {
    Name,Description,Imageurl,Ratings,NoOfRatings,ytSubs,instaFollowers,XFollowers,fbFollowers,
    Location,email,expect,hashtags,instaLink,phNumber,reviews,xLink,ytLink,fbLink,coverPhotoURL,
  } = influencerData;

  return (
    <SafeAreaView style={styles.container}>
      <Header title={Name} />
      <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.coverPhotoContainer}>
        <Image
          source={coverPhotoURL ? { uri: Imageurl } : require('../../assets/images/sample-cover-photo.png')}
          style={styles.coverPhoto}
        />
      </View>

      <View style={styles.profileImageWrapper}>
        <Image
          source={Imageurl ? { uri: Imageurl } : require('../../assets/images/placeholder.jpeg')}
          style={styles.profileImage}
        />
      </View>
      <ScrollView />

      <Text style={styles.name}>{Name}</Text>
      <Text style={styles.locationText}>{Location}</Text>
      <Socials
      ytSubs={ytSubs}
      XFollowers={XFollowers}
      instaFollowers={instaFollowers}
      fbFollowers={fbFollowers}
      ytLink={ytLink}
      xLink={xLink}
      instaLink={instaLink}
      fbLink={fbLink}
      />      
      <InteractButtons phNumber={phNumber} email={email} />
      <DescExpect Description={Description} expect={expect}/>
      <RtgReview Ratings={Ratings} NoOfRatings={NoOfRatings} reviews={reviews} />
      <HashtagList hashtags={hashtags}/>
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
  content: {
    padding: 20,
    paddingBottom: 100,
  },
  coverPhotoContainer: {
    height: 150,
    backgroundColor: '#e0e0e0',
  },
  coverPhoto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileImageWrapper: {
    alignItems: 'center',
    marginTop: -50,
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  locationText: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
  }
});


export default InfluencerPage;
