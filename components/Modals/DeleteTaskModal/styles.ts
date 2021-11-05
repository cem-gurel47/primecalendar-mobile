import { StyleSheet } from 'react-native';
import constants from '../../../utils/constants';

const styles = StyleSheet.create({
  modalStyles: {
    position: 'relative',
    margin: 20,
    backgroundColor: constants.gray[8],
    borderColor: constants.gray[4],
    borderWidth: 1,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeIcon: { position: 'absolute', top: 15, right: 20 },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deleteButtonStyle: {
    marginTop: 5,
  },
  cancelButtonStyle: { marginTop: '15%' },
});

export default styles;
