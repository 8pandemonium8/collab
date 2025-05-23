import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width*81.78/100;

const RtgReview = ({ Ratings, NoOfRatings, reviews }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef();

  const handleScroll = (event) => {
    const page = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentPage(page);
  };

  // Limit the max number of visible dots to 3
  const getVisibleDots = () => {
    const total = reviews.length;
    const start = Math.max(0, Math.min(currentPage - 1, total - 3));
    return reviews.slice(start, start + Math.min(3, total));
  };

  return (
    <View style={styles.infoBox}>
      <Text style={styles.sectionTitle}>Ratings</Text>
      <View style={styles.ratingRow}>
        <Text style={styles.ratingText}>{Ratings}</Text>
        <Ionicons name="star" size={24} color="#FFD700" style={{ marginLeft: 5 }} />
        <Text style={styles.numRatingsText}>{NoOfRatings} ratings</Text>
      </View>

      <Text style={styles.sectionTitle}>{reviews.length} Reviews</Text>

      <ScrollView
        horizontal
        pagingEnabled
        snapToInterval={CARD_WIDTH}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        style={styles.reviewsBox}
        contentContainerStyle={styles.reviewsContent}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={scrollRef}
      >
        {reviews.map((review, index) => (
          <View key={index} style={[styles.reviewCard, { width: CARD_WIDTH }]}>
            <Text style={styles.reviewText}>{review}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      <View style={styles.dotsContainer}>
        {getVisibleDots().map((_, index) => {
          const actualIndex = Math.max(0, Math.min(currentPage - 1, reviews.length - 3)) + index;
          return (
            <View
              key={index}
              style={[
                styles.dot,
                actualIndex === currentPage && styles.activeDot
              ]}
            />
          );
        })}
      </View>
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
    marginRight: 0,
    backgroundColor: '#004aad',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
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

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: '#004aad',
  },
});

export default RtgReview;
