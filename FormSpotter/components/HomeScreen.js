import { useState, useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View, Alert, ActivityIndicator } from 'react-native';
import HomeStyles from '../styles/HomeStyles';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import SharedStyles from '../styles/SharedStyles';
import { VideoPlayer, base64ToVideo } from './VideoPlayer';

// import RNFS from 'react-native-fs';
// import RNVideo from 'react-native-video-processing';
const MyProfile = require('../assets/my.png');
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

  function truncate(number) {
    return Number(number.toFixed(2));
  }

  return (
    <SafeAreaView style={SharedStyles.SafeArea}>
      {loading ?
        (
          <View style={SharedStyles.loading}>
            <Text style={SharedStyles.loadingText}>Analyzing...</Text>
            <ActivityIndicator animating={true} size="large" color="#FFA34E" />
          </View>
        )
        :
        (
          <View style={{ alignItems: 'center' }}>
            <View style={HomeStyles.container}>
              {(renderedVideo && exerciseAnalytics) ? 
              (
                <>
                  <View style={{flex: 1, alignItems: 'center', marginTop: 0, padding: 0}}>
                    <Text style={{fontSize: 24, fontWeight: '600'}}>Your Squat Analysis</Text>
                    <VideoPlayer dataURL={renderedVideo} alignmentMask={exerciseAnalytics.alignment_mask} />
                    <View style={{ display: 'flex', marginBottom: 15, padding: 0, justifyContent: 'flex-start', alignItems: 'center'}}>
                      <Text style={HomeStyles.stat}>
                        Shoulder Alignment Score:{' '} <Text style={{fontWeight: '800'}}> {truncate(exerciseAnalytics.alignment_score)}%</Text>
                      </Text>
                      <Text style={HomeStyles.stat}>
                        Max Knee Angle:{' '} <Text style={{fontWeight: '800'}}> {truncate(exerciseAnalytics.depth[1])}°</Text>
                      </Text>
                      <Text style={HomeStyles.stat}>
                        Max Hip Angle:{' '} <Text style={{fontWeight: '800'}}> {truncate(exerciseAnalytics.depth[0])}°</Text>
                      </Text>
                    </View>
                  </View>
                </>
              )
            :
            (
              <>
                <View style={{width: '100%', padding: 10, flexDirection: 'row'}}>
                  <Image source={MyProfile} style={{marginRight: 20}}/>
                  <View style={{flex: 1, width: 55, flexDirection: 'column'}}>
                    <Text style={HomeStyles.greeting}>Good Morning, My</Text>
                    <Text style={HomeStyles.streak}>Keep up the 3-day streak 🔥!</Text>
                  </View>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                  <Text style={HomeStyles.greeting}>Log your workout today!</Text>
                </View>
                
              </>
            )
            }
            </View>
            <View style={HomeStyles.footer}>
              <Image source={require('../assets/navbar.png')} style={HomeScreen.footerImage}/>
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