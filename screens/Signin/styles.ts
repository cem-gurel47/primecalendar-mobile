import { StyleSheet, Dimensions } from 'react-native';
import constants from '../../utils/constants';
import { normalize } from '../../utils/helpers/normalize';

const SCREEN_WIDTH = Dimensions.get('window').width * 0.9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '70%',
  },
  innerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: normalize(20),
    color: '#fff',
    marginBottom: '40%',
    fontWeight: 'bold',
  },
  description: { fontSize: normalize(16), color: constants.descriptionColor },
  imageContainer: {
    marginVertical: '10%',
    height: '60%',
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    marginVertical: '10%',
    width: normalize(60),
    height: normalize(60),
  },
  input: {
    fontSize: normalize(16),
    color: '#fff',
    width: SCREEN_WIDTH,
    borderBottomWidth: 1,
    borderBottomColor: constants.gray[6],
    marginBottom: '10%',
    paddingBottom: '1%',
  },
  button: {
    width: SCREEN_WIDTH,
    height: normalize(35),
    marginBottom: normalize(15),
  },
  dividerContainer: {
    marginVertical: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    width: '45%',
    height: normalize(1),
    backgroundColor: constants.gray[6],
  },
  orText: {
    width: '10%',
    textAlign: 'center',
    color: constants.gray[4],
  },
  google: {
    width: normalize(15),
    height: normalize(15),
    marginRight: normalize(10),
  },
});

export default styles;
