import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RtgReview = ({ Ratings, NoOfRatings, reviews }) => {
  return (
    <View style={styles.infoBox}>
      <Text style={styles.sectionTitle}>Ratings</Text>
      <View style={styles.ratingRow}>
        <Text style={styles.ratingText}>{Ratings}</Text>
        <Ionicons name="star" size={24} color="#FFD700" style={{ marginLeft: 5 }} />
        <Text style={styles.numRatingsText}>{NoOfRatings} ratings</Text>
      </View>

      <Text style={styles.sectionTitle}>Reviews</Text>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.reviewsBox}
        contentContainerStyle={styles.reviewsContent}
      >
        {reviews?.map((review, index) => (
          <View key={index} style={styles.reviewCard}>
            <Text style={styles.reviewText}>{review}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },

  ratingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },

  numRatingsText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
  },

  reviewsBox: {
    height: 100,
    marginTop: 10,
  },

  reviewsContent: {
    alignItems: 'center',
  },

  reviewCard: {
    width: 300,
    marginRight: 15,
    backgroundColor: '#004aad',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  reviewText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default RtgReview;
