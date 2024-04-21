import { Platform, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import OnboardingStyles from '../styles/OnboardingStyles';
import SharedStyles from '../styles/SharedStyles';
export default function OnboardingScreen({ navigation }) {
    return(
        <SafeAreaView style={SharedStyles.SafeArea}>
            <View style={OnboardingStyles.container}>
            <Text>Onboarding</Text>
            {/* <StatusBar style="auto" /> */}
            <TouchableOpacity 
                style={OnboardingStyles.button} 
                onPress={() => navigation.navigate("Home")}
            >
                <Text>Go To Home</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}