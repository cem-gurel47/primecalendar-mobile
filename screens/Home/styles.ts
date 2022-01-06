import { StyleSheet } from 'react-native';
import constants from '../../utils/constants';

export default StyleSheet.create({
  image: {
    position: 'absolute',
    left: '25%',
    marginTop: '20%',
  },
  addButton: {
    // width: 60,
    // aspectRatio: 1,
    // position: 'absolute',
    // right: '2%',
    // top: '90%',
    backgroundColor: constants.primary,
    // borderRadius: 50,
    // zIndex: 1000,
  },
  leftSide: { flexDirection: 'row', alignItems: 'center' },
  rightSide: {
    alignItems: 'flex-end',
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    backgroundColor: constants.gradient,
  },
  seeDetailsButton: {
    marginLeft: '0%',
    position: 'absolute',
    left: '70%',
  },
});
