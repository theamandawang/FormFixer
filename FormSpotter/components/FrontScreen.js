import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import FrontPageStyles from '../styles/FrontPageStyles'; // Import styles
import { useNavigation } from '@react-navigation/native';

const FrontScreen = () => {
  const navigation = useNavigation();

  const handleContinueAsGuest = () => {
    navigation.navigate('Home'); // Navigate to ExercisesPage
  };

  return (
    <SafeAreaView style={FrontPageStyles.container}>
      <View style={FrontPageStyles.content}>
        <Image
          source={require('../assets/banana_logo.jpeg')}
          style={FrontPageStyles.image}
        />
        <Text style={FrontPageStyles.title}>👋 Welcome to Form Spotter</Text>
        <Text style={FrontPageStyles.subtitle}>Your personal AI-powered trainer! To help you boost your confidence and stay motivated at the gym. </Text>
        <TouchableOpacity style={FrontPageStyles.button}>
          <Text style={FrontPageStyles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleContinueAsGuest}>
          <Text style={FrontPageStyles.guestText}>Continue as Guest!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FrontScreen;
