import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 100,
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
    borderRadius: 3,
  },
  titleContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
  },
  title: { color: 'white' },
  duration: {
    fontSize: 10,
    color: 'darkgrey',
  },
  plot: {
    color: 'darkgrey',
    marginVertical: 6,
  },
});

export default styles;
