import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
  },
  title: { fontSize: 20, fontWeight: 'bold', color: 'white' },
  match: { color: '#59d467', fontWeight: 'bold', marginRight: 5 },
  year: { color: '#757575' },
  ageContainer: {
    backgroundColor: '#e6e229',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    borderRadius: 2,
    marginRight: 5,
    marginLeft: 5,
  },
  age: { color: 'black', fontWeight: 'bold' },
  playBtn: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  playBtnTxt: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  downloadBtn: {
    backgroundColor: '#2b2b2b',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 3,
  },
  downloadBtnTxt: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default styles;
