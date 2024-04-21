import { useState, useRef } from 'react';
import { StyleSheet, TouchableOpacity, Image, Button, Text, View, Alert, ActivityIndicator } from 'react-native';
import HomeStyles from '../styles/HomeStyles';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';
import SharedStyles from '../styles/SharedStyles';


export default function HomeScreen({ navigation }) {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const [video, setVideo] = useState(null);

  const [loading, setLoading] = useState(false);
  // uploads
  const handleUploadVideo = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('video', video);

      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      
      if (response.ok) {
        Alert.alert('Video uploaded successfully');
      } else {
        Alert.alert('Failed to upload video');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error uploading video:', error);
      Alert.alert('Error uploading video');
      setLoading(false);
    }
  };

  // video picker
  const pickVideo = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
      handleUploadVideo();
    }
  };
  return (
    <SafeAreaView style={SharedStyles.SafeArea}>
      {loading ?
        (
          <View>
            <ActivityIndicator size="large" color="blue" />
          </View>
        )
        :
        (
          <View style={{alignItems: 'center'}}>
            <View style={HomeStyles.container}>
              <Text style={HomeStyles.title}>Home Screen</Text>
              {video &&
                <View style={styles.videoContainer}>
                  <Video
                    ref={videoRef}
                    style={styles.video}
                    source={{
                      uri: video,
                    }}
                    useNativeControls
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping={true}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                  />
                  <View style={styles.buttons}>
                    <Button
                      title={status.isPlaying ? 'Pause' : 'Play'}
                      onPress={() =>
                        status.isPlaying ? videoRef.current.pauseAsync() : videoRef.current.playAsync()
                      }
                    />
                  </View>
                </View>

              }
            </View>
            <View style={HomeStyles.footer}>
              <Image source={require('../assets/navbar.png')} style={HomeScreen.footerImage}></Image>
            </View>
            <TouchableOpacity
              style={HomeStyles.uploadButton}
              onPress={pickVideo}
            >
              <AntDesign name="plus" size={36} color="black" />
            </TouchableOpacity>
          </View>
        )
      }
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});