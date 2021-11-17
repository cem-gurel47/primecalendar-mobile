import { StyleSheet, Dimensions } from 'react-native';
import constants from '../../utils/constants';
import { normalize } from '../../utils/helpers/normalize';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

export default StyleSheet.create({
  iconStyles: { marginRight: 10 },
  leftSide: { flexDirection: 'row', alignItems: 'center' },
  rightSide: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: normalize(55),
  },
  taskContainer: {
    width: '100%',
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: constants.gray[4],
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(12),
    marginBottom: '2%',
    //backgroundColor: '#097054',
    backgroundColor: constants.icon[2],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: normalize(SCREEN_HEIGHT / 18),
  },
  statusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: normalize(5),
    paddingHorizontal: normalize(15),
    backgroundColor: constants.gray[8],
  },
  seeDetailsButton: {},
  checkBoxIcon: {
    marginRight: normalize(-12),
  },
});
