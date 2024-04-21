import { useState, useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, Image, Button, Text, View, Alert, ActivityIndicator } from 'react-native';
import HomeStyles from '../styles/HomeStyles';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';
import SharedStyles from '../styles/SharedStyles';
import { VideoPlayer, base64ToVideo } from './VideoPlayer';

// import RNFS from 'react-native-fs';
// import RNVideo from 'react-native-video-processing';

const ip_addr = "10.20.0.92:8080";

// const convertMovToMp4 = async (movUri) => {
//   try {
//     // Get the directory path where the converted video will be saved
//     const outputPath = `${RNFS.DocumentDirectoryPath}/tmp.mp4`;

//     // Convert the video
//     await RNVideo.convertToMp4(movUri, outputPath);

//     console.log('Video conversion successful');
//     return outputPath;
//   } catch (error) {
//     console.error('Error converting video:', error);
//     return null;
//   }
// };

export default function HomeScreen({ navigation }) {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const [video, setVideo] = useState(null);
  const [renderedVideo, setRenderedVideo] = useState(null);
  const [exerciseAnalytics, setExerciseAnalytics] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleUploadVideo();
  }, [video]);

  // uploads
  const handleUploadVideo = async () => {
    if (!video)
      return;

    try {
      setLoading(true);
      const formData = new FormData();
      // const mp4_video = await convertMovToMp4(video);

      formData.append('file', {
        uri: video.uri,
        name: video.fileName,
        type: 'video/mp4',
      });

      const response = await fetch(`http://${ip_addr}/upload`, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = await response.json();
      const b64_video = await base64ToVideo(data.file_content);

      setExerciseAnalytics(data.tracking_data);
      setRenderedVideo(b64_video);

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
      setVideo(result.assets[0]);
    }
  };
  return (
    <SafeAreaView style={SharedStyles.SafeArea}>
      {loading ?
        (
          <View>
            <Text style={HomeStyles.title}>This could take a minute or two</Text>
            <ActivityIndicator size="large" color="blue" />
          </View>
        )
        :
        (
          <View style={{ alignItems: 'center' }}>
            <View style={HomeStyles.container}>
              <Text style={HomeStyles.title}>Home Screen</Text>
              {(renderedVideo && exerciseAnalytics) && (
                <>
                  <VideoPlayer dataURL={renderedVideo} alignmentMask={exerciseAnalytics.alignment_mask} />
                  <View style={{ display: 'flex' }}>
                    <Text style={HomeStyles.stat}>Shoulder Alignment Score: {exerciseAnalytics.alignment_score}</Text>
                    <Text style={HomeStyles.stat}>Max Knee Angle: {exerciseAnalytics.depth[1]}</Text>
                    <Text style={HomeStyles.stat}>Max Hip Angle: {exerciseAnalytics.depth[0]}</Text>
                  </View>
                </>
              )}
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