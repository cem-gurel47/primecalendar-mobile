import { StyleSheet } from 'react-native';
import constants from '../../utils/constants';

export default StyleSheet.create({
  iconStyles: { marginRight: 10 },
  leftSide: { flexDirection: 'row', alignItems: 'center' },
  rightSide: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 55,
  },
  taskContainer: {
    width: '100%',
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: constants.gray[4],
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: '2%',
    backgroundColor: '#097054',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  statusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: constants.gray[8],
  },
  seeDetailsButton: {},
  checkBox: {},
});
