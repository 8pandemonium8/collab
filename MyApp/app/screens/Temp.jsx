import axios from 'axios';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import Footer from '../../components/footer';
import Header from '../../components/header';


const Temp = () => {
  const [Name, onChangeName] = React.useState('');
  const [Description, onChangeDescription] = React.useState('');
  const [Imageurl, onChangeImageurl] = React.useState('');
  const [Ratings, onChangeRatings] = React.useState('');
  const [NoOfRatings, onChangeNoOfRatings] = React.useState('');
  const [ytSubs, onChangeytSubs] = React.useState('');
  const [instaFollowers, onChangeinstaFollowers] = React.useState('');
  const [XFollowers, onChangeXFollowers] = React.useState('');

  const createCard = async () => {
    console.log("bruh");
    try{
        const response = await axios.post('http://192.168.0.100:3000/api/influencers', {
            Name,
            Description, 
            Imageurl,
            Ratings,
            NoOfRatings,
            ytSubs,
            instaFollowers,
            XFollowers
        })
        .then(response => {console.log("RESPONSE:", response.data)})
        .catch(error => {console.log("ERROR:", error)});
        window.alert('does this work tho');
    }
    catch(error){
        console.log("error");
        window.alert("error brah")
    }
    axios.post('https://api.example.com/post-endpoint', {key1: 'value1',key2: 'value2',
})
  .then(response => {console.log('Response:', response.data);
  })
  .catch(error => {console.error('Error:', error);
  });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      
      <View style={styles.cardContainer}>
        <TextInput style = {styles.input} value = {Name} onChangeText={onChangeName} placeholder='Name'/>
        <TextInput style = {styles.input} multiline numberOfLines={4} value = {Description} onChangeText={onChangeDescription} placeholder='Description'/>
        <TextInput style = {styles.input} value = {Imageurl} onChangeText={onChangeImageurl} placeholder='Image Url'/>
        <TextInput style = {styles.input} value = {Ratings} onChangeText={onChangeRatings} placeholder='Ratings'/>
        <TextInput style = {styles.input} value = {NoOfRatings} onChangeText={onChangeNoOfRatings} placeholder='No of Ratings'/>
        <TextInput style = {styles.input} value = {ytSubs} onChangeText={onChangeytSubs} placeholder='YT subs'/>
        <TextInput style = {styles.input} value = {instaFollowers} onChangeText={onChangeinstaFollowers} placeholder='Insta Followers'/>
        <TextInput style = {styles.input} value = {XFollowers} onChangeText={onChangeXFollowers} placeholder='X Followers'/>
        <Button title = "Push into mongodb and create a card" onPress = {createCard}/>
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
  input : {
    width : '95%',
    minHeight : '5%',
    borderColor: 'black',
    borderWidth : 1,
    marginTop : 5,
    marginBottom : 5,
  },
});

export default Temp;
