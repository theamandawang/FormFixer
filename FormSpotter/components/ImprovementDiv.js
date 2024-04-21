import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import lightbulbIcon from '../assets/lightbulb_icon.png'; // Assuming you have a light bulb icon image

const ImprovementDiv = ({ header, subtext }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={lightbulbIcon} style={styles.icon} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.subtext}>{subtext}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 12,
  },
  iconContainer: {
    marginRight: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtext: {
    fontSize: 14,
    color: '#666',
  },
});

export default ImprovementDiv;