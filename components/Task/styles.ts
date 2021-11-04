import { StyleSheet } from 'react-native';
import constants from '../../utils/constants';

export default StyleSheet.create({
  iconStyles: { marginRight: 10 },
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
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: constants.gradient,
  },
  seeDetailsButton: {
    marginLeft: '0%',
    position: 'absolute',
    left: '70%',
  },
  checkBox: {
    paddingVertical: 5,
  },
});
