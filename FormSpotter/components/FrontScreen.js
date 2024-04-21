import { ImageBackground, SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import FrontScreenStyles from '../styles/FrontScreenStyles'; // Import styles
import SharedStyles from '../styles/SharedStyles';
import { useNavigation } from '@react-navigation/native';

export default function FrontScreen() {
  const navigation = useNavigation();

  const handleContinueAsGuest = () => {
    navigation.navigate('Home'); // Navigate to ExercisesPage
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/welcome.jpg')}
        resizeMode='cover'
        style={{ flex: 1, justifyContent: 'center', padding: 40 }}
      >
        <Text style={FrontScreenStyles.title}>👋 Welcome to FormFixer</Text>
        <Text style={FrontScreenStyles.subtitle}>Your personal AI-powered trainer! To help you boost your confidence and stay motivated at the gym. </Text>
        <TouchableOpacity style={FrontScreenStyles.button}>
          <Text style={FrontScreenStyles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleContinueAsGuest}>
          <Text style={FrontScreenStyles.guestText}>Continue as Guest!</Text>
        </TouchableOpacity>

      </ImageBackground>
    </SafeAreaView>
  );
};
