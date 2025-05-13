import { Image, Dimensions, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

const MainScreenCard = () => {
  return (
    <View style = {styles.mainContainer}>
        <ImageOfTheCard/>
        <NameAndDesc/>
        <StatsContainer/>
    </View>
  );
};


const StatsContainer = () => {
  return (
    <View style = {styles.statsContainerStyle}>
      <YoutubeStats/>
      <YoutubeStats/>
      <YoutubeStats/>
    </View>
  )
}

const YoutubeStats = () => {
  return (
    <View style = {styles.ytContainer}>
      <Image source={require('../assets/images/yt.png')} style = {styles.ytLogo}/>
      <Text style = {styles.ytText}>50,340</Text>
    </View>
  )
}

const NameAndDesc =() => {
  return(
    <View style = {styles.NameAndDescContainer}>
      <Text style = {styles.Name}>Sussy Baka</Text>
      <Text style = {styles.Desc}>Along the shore the cloud waves break,The twin suns sink behind* the lake,The shadows lengthen
In Carcosa.
Strange is the night where black stars rise,
And strange moons circle through the skies
But stranger still is
Lost Carcosa.</Text>
    </View>
  )
}



const ImageOfTheCard = () => {
  return(
    <Image
              source={require('../assets/images/dn.png')} 
              style={[styles.logo]}
            />
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    width : '95%',
    height : '30%',
    margin : 20,
    padding: 10,
    backgroundColor : 'purple',
    flexDirection : 'row',
    justifyContent : 'flex-start',
    borderRadius : 12,
  },
  NameAndDescContainer : {
    width : '40%',
    height : 'cover',
    flexDirection : 'column',
    justifyContent : 'flex-start',
    alignContent : 'flex-start',
    marginHorizontal : 10,
    marginBottom : 10,
  },  
  Name : {
    fontSize : 27,
    color : 'white',
  },
  Desc : {
    fontSize : 10,
    color: 'white',
  }, 
  statsContainerStyle : {
    width : '40%',
    flexDirection : 'column',
    justifyContent : 'space-between'
  }, 
  ytContainer : {
    flexDirection : 'row',
    justifyContent : 'flex-start',
    alignContent : 'center',
    width: '30%',
    color : 'white',
  }, 
  ytLogo : {
    width : 50,
    height : 50, 
    justifyContent : 'center',
    alignContent : 'center', 
  }, 
  ytText : {
    fontSize : 10,
    color : 'white',
    justifyContent : 'center',
    alignContent : 'center',
    marginTop : 10
  }, 
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  headerContainer: {
    backgroundColor: '#004aad', // light blue
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0051ff',
    marginBottom: 10,
  }, 
  logo: {
    resizeMode: 'cover',
    alignSelf: 'center',
    width : '30%',
    height : '100%'
  }
});



export default MainScreenCard;
