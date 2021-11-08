import { Dimensions, StyleSheet } from 'react-native';
import constants from '../../utils/constants';

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get('screen').width,
    borderTopColor: constants.borderColor,
    borderTopWidth: 1,
    borderBottomColor: constants.borderColor,
    borderBottomWidth: 1,
    paddingVertical: 12,
    color: constants.white,
    fontSize: 17,
    marginBottom: 12,
  },
  container: {
    width: '100%',
  },
  text: {
    fontSize: 17,
  },
  taskDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalButton: {
    width: 150,
  },
  picker: {
    backgroundColor: constants.white,
    width: '100%',
    height: 50,
  },
});

export default styles;
