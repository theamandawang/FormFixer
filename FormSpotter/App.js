import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import FrontScreen from './components/FrontScreen'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
                <Stack.Screen 
                  name="Welcome" 
                  component={FrontScreen} />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                {/* <Stack.Screen
                    name="Improvements"
                    component={ImprovementScreen}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
}