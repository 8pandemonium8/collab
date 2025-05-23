import React  from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const DescExpect = ({Description, expect}) =>{
    return (  
    <View style={styles.infoBox}>
    <Text style={styles.sectionTitle}>Description</Text>
    <Text style={styles.description}>{Description}</Text>

    <Text style={styles.sectionTitle}>What to Expect</Text>
    <Text style={styles.description}>{expect}</Text>
  </View>

);
}

const styles = StyleSheet.create({
  infoBox: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    color: '#555',
  }
});

export default DescExpect;