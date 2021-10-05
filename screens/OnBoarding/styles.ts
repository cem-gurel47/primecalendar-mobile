import { StyleSheet } from 'react-native';
import constants from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: '20%',
    flexGrow: 1,
    backgroundColor: constants.black,
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: '4%',
    fontWeight: 'bold',
  },
  description: { fontSize: 16, color: constants.descriptionColor },
  image: { marginVertical: '10%', height: '60%', width: '70%' },
});

export default styles;
