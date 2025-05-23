import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // or another set like MaterialCommunityIcons




const MainScreenCard = ({
  Id, Name, ImageUrl,
  ytSubs, instaFollowers, XFollowers, fbFollowers,
  hashtags, index
}) => {
  const navigation = useNavigation();
  const colors = ['#AEDFF7', '#F8C8DC', '#D1C4E9', '#FFECB3', '#C8E6C9'];
  const backgroundColor = colors[index % colors.length];
  const navigateToProfileFunction = () => {
    console.log("func working")
    console.log(Id)
    navigation.navigate('InfluencerPage',{ idParam: Id })
  }

  return (
    <TouchableOpacity style={[styles.mainContainer, { backgroundColor }]} onPress={navigateToProfileFunction}>
      <ImageOfTheCard ImageUrlOfCard={ImageUrl} />
      <View style={styles.rightContentContainer}>
        <Text style={styles.Name}>{Name}</Text>
        <StatsContainer 
          ytSubs={ytSubs} 
          instaFollowers={instaFollowers} 
          XFollowers={XFollowers} 
          fbFollowers={fbFollowers} 
        />
        <HashtagsContainer hashtags={hashtags} />
      </View>
    </TouchableOpacity>
  );
};


const StatsContainer = ({ ytSubs, instaFollowers, XFollowers, fbFollowers }) => {
  return (
    <View style={styles.statsContainerStyle}>
      <PlatformStat iconName="youtube-play" color="#FF0000" count={ytSubs} />
      <PlatformStat iconName="instagram" color="#C13584" count={instaFollowers} />
      <PlatformStat iconName="twitter" color="#1DA1F2" count={XFollowers} />
      <PlatformStat iconName="facebook" color="#1877F2" count={fbFollowers} />
    </View>
  );
};

const PlatformStat = ({ iconName, color, count }) => (
  <View style={styles.ytContainer}>
    <Icon name={iconName} size={20} color={color} style={styles.platformIcon} />
    <Text style={styles.ytText}>{count}</Text>
  </View>
);


const HashtagsContainer = ({ hashtags }) => (
  <View style={styles.hashtagsContainer}>
    {hashtags.map((tag, index) => (
      <Text key={index} style={styles.hashtag}>{tag}</Text>
    ))}
  </View>
);

const ImageOfTheCard = ({ ImageUrlOfCard }) => {
  const isValidUrl = ImageUrlOfCard && typeof ImageUrlOfCard === 'string' && ImageUrlOfCard.trim() !== '';

  return (
    <Image
      style={[styles.logo]}
      source={
        isValidUrl
          ? { uri: ImageUrlOfCard }
          : require('../assets/images/placeholder.jpeg')
      }
    />
  );
};
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
  Name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
    alignSelf: 'center',
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
  },
  rightContentContainer: {
  flex: 1,
  paddingLeft: 10,
  justifyContent: 'space-between',
},

platformLogo: {
  width: 25,
  height: 25,
  marginRight: 5,
},

hashtagsContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 5,
},

hashtag: {
  color: 'white',
  fontSize: 10,
  marginRight: 5,
  backgroundColor: '#004aad',
  paddingHorizontal: 5,
  paddingVertical: 2,
  borderRadius: 5,
},
ytText: {
  fontSize: 12,
  color: 'white',
  marginLeft: 5,
},
statsContainerStyle: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '70%',
},

ytContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  width: '48%', // To allow two per row with spacing
  marginBottom: 5,
},

});



export default MainScreenCard;
