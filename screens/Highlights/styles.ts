import { Dimensions, StyleSheet } from 'react-native';
import constants from '../../utils/constants';
import { normalize } from '../../utils/helpers/normalize';
const SCREEN_WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: { flex: 1 },
  chartContainer: {
    borderRadius: normalize(18),
    padding: normalize(10),
    borderColor: constants.borderColor,
    borderWidth: 1,
    alignItems: 'center',
  },
  chartTitle: {
    marginBottom: normalize(5),
  },
  categoryText: {
    fontSize: normalize(20),
  },
  categoryStatusIcon: {
    position: 'absolute',
    bottom: normalize(15),
    right: normalize(15),
  },
  comparisonsContainer: {
    marginTop: normalize(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  comparisonContainer: {
    paddingTop: normalize(40),
    paddingLeft: normalize(10),
    borderRadius: normalize(18),
    width: SCREEN_WIDTH / 2.2,
    height: SCREEN_WIDTH / 2.2,
    marginBottom: normalize(15),
    borderColor: constants.borderColor,
    borderWidth: 1,
    backgroundColor: constants.highPriority,
  },
});

export default styles;
