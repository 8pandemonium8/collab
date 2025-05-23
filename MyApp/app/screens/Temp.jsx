import axios from 'axios';
import Constants from 'expo-constants';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput, View, ScrollView } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import Footer from '../../components/footer';
import Header from '../../components/header';

const getServerUrl = () => {
  const ip = Constants.expoConfig?.hostUri?.split(':')[0];
  return `http://${ip}:3000`;
};

const Temp = () => {
  const [Name, onChangeName] = React.useState('');
  const [Description, onChangeDescription] = React.useState('');
  const [Imageurl, onChangeImageurl] = React.useState('');
  const [Ratings, onChangeRatings] = React.useState('');
  const [NoOfRatings, onChangeNoOfRatings] = React.useState('');
  const [ytSubs, onChangeytSubs] = React.useState('');
  const [instaFollowers, onChangeinstaFollowers] = React.useState('');
  const [XFollowers, onChangeXFollowers] = React.useState('');
  const [fbFollowers, onChangefbFollowers] = React.useState('');
  const [Location, onChangeLocation] = React.useState('');
  const [coverPhoto, onChangeCoverPhoto] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [expect, onChangeExpect] = React.useState('');
  const [fbLink, onChangeFbLink] = React.useState('');
  const [instaLink, onChangeInstaLink] = React.useState('');
  const [xLink, onChangeXLink] = React.useState('');
  const [ytLink, onChangeYtLink] = React.useState('');
  const [phNumber, onChangePhNumber] = React.useState('');
  const [hashtags, onChangeHashtags] = React.useState('');
  const [reviews, onChangeReviews] = React.useState('');

  const createCard = async () => {
    try {
      const serverURL = getServerUrl();
      const response = await axios.post(`${serverURL}/api/influencers`, {
        Id: uuid(),
        Name,
        Description,
        Imageurl,
        Ratings,
        NoOfRatings,
        ytSubs,
        instaFollowers,
        XFollowers,
        fbFollowers,
        Location,
        coverPhoto,
        email,
        expect,
        fbLink,
        instaLink,
        xLink,
        ytLink,
        phNumber,
        hashtags: hashtags.split(',').map(tag => tag.trim()),
        reviews: reviews.split(',').map(tag => tag.trim()),
      });
      console.log('RESPONSE:', response.data);
      alert('Card created successfully');
    } catch (error) {
      console.error(error);
      alert('Error occurred while creating the card');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TextInput style={styles.input} value={Name} onChangeText={onChangeName} placeholder="Name" />
        <TextInput style={styles.input} multiline numberOfLines={4} value={Description} onChangeText={onChangeDescription} placeholder="Description" />
        <TextInput style={styles.input} value={Imageurl} onChangeText={onChangeImageurl} placeholder="Image URL" />
        <TextInput style={styles.input} value={Ratings} onChangeText={onChangeRatings} placeholder="Ratings" />
        <TextInput style={styles.input} value={NoOfRatings} onChangeText={onChangeNoOfRatings} placeholder="No of Ratings" />
        <TextInput style={styles.input} value={ytSubs} onChangeText={onChangeytSubs} placeholder="YouTube Subscribers" />
        <TextInput style={styles.input} value={instaFollowers} onChangeText={onChangeinstaFollowers} placeholder="Instagram Followers" />
        <TextInput style={styles.input} value={XFollowers} onChangeText={onChangeXFollowers} placeholder="X Followers" />
        <TextInput style={styles.input} value={fbFollowers} onChangeText={onChangefbFollowers} placeholder="Facebook Followers" />
        <TextInput style={styles.input} value={Location} onChangeText={onChangeLocation} placeholder="Location" />
        <TextInput style={styles.input} value={coverPhoto} onChangeText={onChangeCoverPhoto} placeholder="Cover Photo URL" />
        <TextInput style={styles.input} value={email} onChangeText={onChangeEmail} placeholder="Email" />
        <TextInput style={styles.input} value={expect} onChangeText={onChangeExpect} placeholder="Expectations" />
        <TextInput style={styles.input} value={fbLink} onChangeText={onChangeFbLink} placeholder="Facebook Link" />
        <TextInput style={styles.input} value={instaLink} onChangeText={onChangeInstaLink} placeholder="Instagram Link" />
        <TextInput style={styles.input} value={xLink} onChangeText={onChangeXLink} placeholder="X Link" />
        <TextInput style={styles.input} value={ytLink} onChangeText={onChangeYtLink} placeholder="YouTube Link" />
        <TextInput style={styles.input} value={phNumber} onChangeText={onChangePhNumber} placeholder="Phone Number" />
        <TextInput style={styles.input} value={hashtags} onChangeText={onChangeHashtags} placeholder="Hashtags (comma-separated)" />
        <TextInput style={styles.input} value={reviews} onChangeText={onChangeReviews} placeholder="Reviews (comma-separated)" />
        <View style={{ marginVertical: 10 }}>
          <Button title="Push into MongoDB and create a card" onPress={createCard} />
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
  scrollContent: {
    padding: 10,
    alignItems: 'center',
  },
  input: {
    width: '95%',
    minHeight: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default Temp;
