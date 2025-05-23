import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const Socials = ({
  ytSubs,
  XFollowers,
  instaFollowers,
  fbFollowers,
  ytLink,
  xLink,
  fbLink,
  instaLink,
}) => {
  const handlePress = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', 'Cannot open the link: ' + url);
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.statsContainer}>
      <TouchableOpacity style={styles.statBox} onPress={() => handlePress(ytLink)}>
        <FontAwesome name="youtube-play" size={28} color="red" />
        <Text style={styles.statText}>{ytSubs} subs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.statBox} onPress={() => handlePress(xLink)}>
        <MaterialCommunityIcons name="alpha-x-circle" size={28} color="black" />
        <Text style={styles.statText}>{XFollowers} followers</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.statBox} onPress={() => handlePress(instaLink)}>
        <FontAwesome name="instagram" size={28} color="#9333EA" />
        <Text style={styles.statText}>{instaFollowers} followers</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.statBox} onPress={() => handlePress(fbLink)}>
        <FontAwesome name="facebook-official" size={28} color="#1877F2" />
        <Text style={styles.statText}>{fbFollowers} followers</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  statBox: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Socials;
