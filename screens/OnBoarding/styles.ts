import { StyleSheet } from 'react-native';
import constants from '../../utils/constants';

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: '4%',
    fontWeight: 'bold',
  },
  description: { fontSize: 16, color: constants.descriptionColor },
  imageContainer: {
    marginVertical: '10%',
    height: '60%',
    width: '100%',
    alignItems: 'center',
  },

  image: { height: '100%', width: '70%' },

  button: {
    marginTop: '5%',
  },
});

export default styles;
