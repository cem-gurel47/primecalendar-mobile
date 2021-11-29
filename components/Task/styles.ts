import { StyleSheet, Dimensions } from 'react-native';
import constants from '../../utils/constants';
import { normalize } from '../../utils/helpers/normalize';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
// const SCREEN_WIDTH = Dimensions.get('screen').width;

const backgroundCalculator = (category: string): string => {
  switch (category) {
    case 'Sports':
      return constants.mediumPriority;
    case 'Study':
      return constants.icon[1];
    case 'Leisure':
      return constants.highPriority;
    default:
      return constants.gradient;
  }
};

export default StyleSheet.create({
  iconStyles: { marginRight: normalize(3) },
  leftSide: { justifyContent: 'space-between' },
  hourIconAndHourTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  //@ts-ignore
  rightSide: (isDeleting) => ({
    alignItems: 'flex-end',
    justifyContent: isDeleting ? 'center' : 'space-between',
  }),
  taskName: {
    color: '#fff',
    fontSize: normalize(16),
    marginBottom: normalize(10),
  },
  mediumText: { fontSize: normalize(14), color: constants.gray[5] },
  // @ts-ignore
  taskContainer: (category) => ({
    width: '100%',
    borderRadius: 10,
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(12),
    marginBottom: '2%',
    backgroundColor: backgroundCalculator(category),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: normalize(SCREEN_HEIGHT / 10),
  }),
  // statusContainer: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 20,
  //   paddingVertical: normalize(5),
  //   paddingHorizontal: normalize(15),
  //   backgroundColor: constants.gray[8],
  // },
  checkBoxIcon: {
    marginRight: normalize(-12),
  },
});
