import { StyleSheet, Platform, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 10 : 0
  },
  container: {
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    // // flex: 1,
    // // alignItems: 'center',
    // // justifyContent: 'center',
    // backgroundColor: '#00ff00',
  },
  bottom: {
    // flex: 1,
    marginTop: 15,
    // padding: 10,
    position: 'absolute',
    bottom: 0,
    width: windowWidth,
    height: windowHeight * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0000',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});