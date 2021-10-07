import { StyleSheet } from 'react-native';
import constants from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
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
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: constants.gray[6],
    marginBottom: '4%',
    paddingBottom: '1%',
  },
  button: {
    width: '100%',
  },
  dividerContainer: {
    marginVertical: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    width: '45%',
    height: 1,
    backgroundColor: constants.gray[6],
  },
  orText: {
    width: '10%',
    textAlign: 'center',
    color: constants.gray[4],
  },
  google: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
});

export default styles;
