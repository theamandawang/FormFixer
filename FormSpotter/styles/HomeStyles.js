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
    backgroundColor: '#e9abab',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    
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