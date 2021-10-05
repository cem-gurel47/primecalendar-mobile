import constants from '../../utils/constants';
import { StyleSheet, TextStyle } from 'react-native';

const backgroundColorCalculator = (type: TextStyle) => {
  switch (type) {
    case 'primary':
      return constants.primary;
    case 'secondary':
      return constants.secondary;

    default:
      break;
  }
};
export default StyleSheet.create({
  container: {
    width: '90%',
  },
  // @ts-ignore
  styles: (type: TextStyle) => ({
    backgroundColor: backgroundColorCalculator(type),
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    color: '#fff',
    textAlign: 'center',
  }),
});
