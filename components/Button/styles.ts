import constants from '../../utils/constants';
import { StyleSheet, TextStyle } from 'react-native';

const backgroundColorCalculator = (type: TextStyle) => {
  switch (type) {
    case 'primary':
      return constants.primary;
    case 'secondary':
      return constants.secondary;
    case 'tertiary':
      return constants.tertiary;

    default:
      break;
  }
};
export default StyleSheet.create({
  // @ts-ignore
  container: (type) => ({
    width: '90%',
    backgroundColor: backgroundColorCalculator(type),
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  styles: {
    color: '#fff',
    textAlign: 'center',
  },
});
