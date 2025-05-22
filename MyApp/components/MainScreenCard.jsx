import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InfluencerPage from '../app/screens/InfluencerPage';



const MainScreenCard = ({Id, Name, Description, ImageUrl, RatingAvg, NOfRatings}) => {
  const navigation = useNavigation();

  
  const navigateToProfileFunction = () => {
    console.log("func working")
    console.log(Id)
    navigation.navigate('InfluencerPage',{ idParam: Id })
  }

  return (
    <TouchableOpacity style = {styles.mainContainer} onPress = {() => {navigateToProfileFunction()}}>
        <ImageOfTheCard ImageUrlOfCard = {ImageUrl}/>
        <NameAndDescAndRate NameOfCard = {Name} DescOfCard = {Description} RatingAvg = {RatingAvg} NOfRatings = {NOfRatings}/>
        <StatsContainer/>
    </TouchableOpacity>
  );
};


const StatsContainer = () => {
  return (
    <View style = {styles.statsContainerStyle}>
      <YoutubeStats/>
      <InstaStats/>
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

const InstaStats = () => {
  return (
    <View style = {styles.ytContainer}>
      <Image source={require('../assets/images/insta.png')} style = {styles.instaLogo}/>
      <Text style = {styles.ytText}>50,340</Text> 
    </View>
  )
}

const NameAndDescAndRate =({NameOfCard,DescOfCard, RatingAvg, NOfRatings}) => {
  return(
    <View style = {styles.NameAndDescContainer}>
      <Text style = {styles.Name}>{NameOfCard}</Text>
      <Text style = {styles.Desc}>{DescOfCard}</Text>
      <RatingsContainer RatingAvg = {RatingAvg} NOfRatings={NOfRatings}/>
    </View>
  )
}

const RatingsContainer = ({RatingAvg,NOfRatings}) => {
  return(
    <View style = {styles.RatingsContainer}>
      <Image source={require('../assets/images/starn.png')} style = {styles.star}/>
      <Text>{RatingAvg}</Text>
      <Text>({NOfRatings})</Text>
    </View>
  )
}

const ImageOfTheCard = ({ImageUrlOfCard}) => {
  return(
    <Image
              style={[styles.logo]}
              source={{
          uri: ImageUrlOfCard,
        }}
            />
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    width : '95%',
    minHeight : '15%',
    marginLeft : 2,
    maringRight : 2,
    marginBottom : 5,
    marginTop : 5,
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
    justifyContent : 'space-between',
    alignContent : 'center',
    width: '60%',
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
  instaLogo : {
    width : 30,
    height : 30, 
    justifyContent : 'center',
    alignContent : 'center', 
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
  },
  RatingsContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  star : {
    height : 30,
    width : 30,
    backgroundColor : 'purple',
    color: 'yellow'
  }
});



export default MainScreenCard;
