import axios from 'axios';
import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Footer from '../../components/footer';
import Header from '../../components/header';

const Profile = () => {
  console.log("Profile screen rendered");

  
  const callApi = async () => {
    console.log('Button pressed, calling API...');
    try {
      const response = await axios.get('http://192.168.1.6:3000/bruh');
      Alert.alert('API Response', response.data);  // Show in alert
      console.log(response.data); // Or log to console
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Somethins went wrong');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Profile</Text>
      <Button title = "Call API" onPress = {callApi}/>
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

export default Profile;
