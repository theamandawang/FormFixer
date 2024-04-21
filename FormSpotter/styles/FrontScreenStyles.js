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
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E9ABAB',
    paddingVertical: 10,
    paddingHorizontal: 110,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1, // Add border width
    borderColor: 'black', // Add border color
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
  },
  guestText: {
    fontSize: 16,
    color: '#666',
    textDecorationLine: 'underline',
  },
});