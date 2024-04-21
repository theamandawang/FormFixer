import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import ImprovementDiv from './ImprovementDiv'; // Assuming ImprovementDiv is in a separate file
import HomeStyles from '../styles/HomeStyles';

const ImprovementScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={HomeStyles.title}>IMPROVE UR FORM</Text>
      <View style={styles.content}>
        <ImprovementDiv header="Header 1" subtext="Subtext 1" />
        <ImprovementDiv header="Header 2" subtext="Subtext 2" />
        <ImprovementDiv header="Header 3" subtext="Subtext 3" />
        {/* Add more ImprovementDiv components as needed */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
});

export default ImprovementScreen;