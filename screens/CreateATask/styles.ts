import { Dimensions, StyleSheet } from 'react-native';
import { normalize } from '../../utils/helpers/normalize';
import constants from '../../utils/constants';

const WIDTH = Dimensions.get('window').width;
const FIXED_CONTAINER = WIDTH / 2.2;

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get('screen').width,
    borderBottomColor: constants.borderColor,
    borderBottomWidth: 1,
    paddingVertical: normalize(17),
    color: constants.white,
    fontSize: normalize(17),
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  taskText: {
    marginLeft: normalize(15),
    fontSize: normalize(12),
  },
  text: {
    fontSize: 12,
  },
  // @ts-ignore
  listItemContainer: (index) => ({
    backgroundColor: constants.gray[6],
    borderTopLeftRadius: index === 0 ? 30 : 0,
    borderTopRightRadius: index === 0 ? 30 : 0,
  }),
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemText: {
    color: constants.white,
    fontWeight: '600',
    marginLeft: normalize(15),
  },
  optionButtonsContainer: {
    width: WIDTH / 2.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionButton: {
    width: '48%',
  },
  bottomSheet: {
    backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)',
  },
  taskDetailContainer: {
    marginTop: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskNameAndIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modalButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: FIXED_CONTAINER,
  },
  repeatingDaysContainer: {
    marginTop: normalize(20),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  repeatingDayText: { marginTop: 20 },
  // @ts-ignore
  repeatingDay: (isSelected) => ({
    width: WIDTH / 8,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: isSelected ? constants.gradient : 'transparent',
    borderWidth: 1,
    borderColor: constants.gradient,
  }),
  // repeatingDayText:(isSelected) => {
  //   isSelected
  // }
  createButton: {
    alignSelf: 'center',
    marginBottom: '5%',
  },
  createButtonText: {
    color: '#fff',
  },
});

export default styles;
