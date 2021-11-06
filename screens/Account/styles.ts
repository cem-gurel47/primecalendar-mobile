import { StyleSheet } from 'react-native';
import constants from '../../utils/constants';

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: '100%',
  },
  menuTab: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingVertical: 15,
    borderTopColor: constants.borderColor,
    borderTopWidth: 1,
  },
  tabName: { marginLeft: 15, fontSize: 16 },
});

export default styles;
