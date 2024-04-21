import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  content: {
    padding: 40, // Apply padding to the content inside the container
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    marginTop: 380,
    fontSize: 42,
    color: 'white',
    // fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFA34E',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1, // Add border width
    borderColor: 'black', // Add border color
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    color: '#000',
  },
  guestText: {
    fontSize: 16,
    color: 'white',
    textDecorationLine: 'underline',
  },
});