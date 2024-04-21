import { StyleSheet, Platform, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#00ff00',
  },
  footer: {
    // backgroundColor: '#cccccc99',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // height: windowHeight * 0.08,
    // maxHeight: 150
  },
  footerImage: {
    maxHeight: 150,
  },
  uploadButton: {
    borderRadius: 100,
    marginBottom: 40,
    height: 80,
    width: 80,
    backgroundColor: '#FFA34E',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 35,
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 15,
    backgroundColor: '#FFA34E',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 18,
    overflow: 'hidden',
    // fontWeight: 'bold',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'stretch',
    width: windowWidth*0.75,
    aspectRatio: 9/16,
    borderRadius: 20, // Adjust this value for rounded corners
    // height: 350, // Adjust height to make it vertical
  },
  video: {
    alignSelf: 'stretch',
    width: windowWidth * 0.75,
    aspectRatio: 9/16,
    borderRadius: 20,
  },
  stat: {
    color: '#20232a',
    textAlign: 'center',
    fontSize: 15,
  }
});