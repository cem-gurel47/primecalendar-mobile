import { StyleSheet } from 'react-native';
import constants from '../../utils/constants';

export default StyleSheet.create({
  image: {
    marginTop: '40%',
  },
  addButton: {
    width: 60,
    aspectRatio: 1,
    position: 'absolute',
    right: '2%',
    top: '100%',
    backgroundColor: constants.primary,
    borderRadius: 50,
    zIndex: 1000,
  },
  taskContainer: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: constants.gray[4],
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: '2%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeDetailsButton: {
    position: 'absolute',
    left: '93%',
  },
});
