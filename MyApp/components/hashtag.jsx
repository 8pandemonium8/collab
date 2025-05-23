import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HashtagList = ({ hashtags }) => {
  if (!Array.isArray(hashtags) || hashtags.length === 0) return null;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {hashtags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginTop: 10,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tag: {
    backgroundColor: '#004aad',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    margin: 4,
  },
  tagText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
  },
});

export default HashtagList;
