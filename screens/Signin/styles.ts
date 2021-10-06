import { StyleSheet } from 'react-native';
import constants from '../../utils/constants';

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: '40%',
    fontWeight: 'bold',
  },
  description: { fontSize: 16, color: constants.descriptionColor },
  imageContainer: {
    marginVertical: '10%',
    height: '60%',
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    marginVertical: '10%',
    width: 60,
    height: 60,
  },
  input: {
    fontSize: 16,
    color: '#fff',
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: constants.gray[6],
    marginBottom: '4%',
    paddingBottom: '1%',
  },
});

export default styles;
