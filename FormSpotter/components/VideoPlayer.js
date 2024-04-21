import { View, Text } from 'react-native';
import { Video } from 'expo-av';
import HomeStyles from '../styles/HomeStyles';

export const base64ToVideo = async (b64) => {
  try {
    // Convert base64 string to blob
    // const response = await fetch(`data:video/mp4;base64,${b64}`);
    // const blob = await response.blob();

    // Create video object
    // return new Blob([blob], { type: 'video/mp4' });
    return `data:video/mp4;base64,${b64}`;
  } catch (error) {
    console.error('Error loading video:', error);
    return null;
  }
}

export const VideoPlayer = ({ dataURL }) => {
  if (!dataURL) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Video
        source={{ uri: dataURL }}
        // style={{ width: 500*aspectRatio, height: 500 }}
        style={HomeStyles.video}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
    </View>
  );
};