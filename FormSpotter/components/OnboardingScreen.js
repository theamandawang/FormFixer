import { Platform, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import OnboardingStyles from '../styles/OnboardingStyles';
export default function OnboardingScreen({ navigation }) {
    return(
        <SafeAreaView style={OnboardingStyles.SafeArea}>
            <Text>Onboarding</Text>
            {/* <StatusBar style="auto" /> */}
            <TouchableOpacity 
                style={OnboardingStyles.button} 
                onPress={() => navigation.navigate("Home")}
            >
                <Text>Go To Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}