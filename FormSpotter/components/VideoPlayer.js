import { useState } from 'react';
import { View, Text } from 'react-native';
import { Video } from 'expo-av';
import HomeStyles from '../styles/HomeStyles';

export const base64ToVideo = async (b64) => {
  return `data:video/mp4;base64,${b64}`;
}

export const VideoPlayer = ({ dataURL, alignmentMask }) => {
  const [frameIndex, setFrameIndex] = useState(0);

  const nextFrame = (status) => {
    setFrameIndex(Math.floor((status.positionMillis / status.durationMillis) * alignmentMask.length));
  };

  if (!dataURL) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom:0}}>
      <Video
        source={{ uri: dataURL }}
        // style={{ width: 500*aspectRatio, height: 500 }}
        style={HomeStyles.video}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={nextFrame}
        isLooping
      />
      {(alignmentMask && frameIndex >= 0 && frameIndex < alignmentMask.length) && (
        <Text>Current form is {alignmentMask[frameIndex] ? <Text style={{fontWeight: '800'}}>Good ✅</Text> : <Text style={{fontWeight: '800'}}>Bad ❌</Text>}</Text>)}
    </View>
  );
};