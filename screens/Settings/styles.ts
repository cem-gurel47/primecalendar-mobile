import { StyleSheet } from 'react-native';
import constants from '../../utils/constants';
import { normalize } from '../../utils/helpers/normalize';
const styles = StyleSheet.create({
  settingsItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: normalize(10),
    borderBottomColor: constants.borderColor,
    borderBottomWidth: 1,
  },
  settingsItemIconAndLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: normalize(10),
  },
  avatar: {
    backgroundColor: constants.gray[5],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(100),
    width: normalize(100),
    height: normalize(100),
    marginBottom: normalize(30),
  },
  initials: {
    fontSize: normalize(30),
  },
});

export default styles;
