import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View } from 'react-native';
import HomeStyles from '../styles/HomeStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
    return (
      <SafeAreaView style={HomeStyles.SafeArea}>
        <View style={HomeStyles.container}>
          <Text style={HomeStyles.title}>Home Screen</Text>
          <View style={HomeStyles.bottom}></View>

          <TouchableOpacity 
            onPress={() => {
              
            }}
          >
            <Text>Camera</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}
