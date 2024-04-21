import { StyleSheet, Platform, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  SafeArea: {
    flex: 1,
    // backgroundColor: "white",
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 10 : 0
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 24,
    fontWeight: '600',
  }
});