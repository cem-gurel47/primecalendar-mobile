import { StyleSheet } from 'react-native';

import { normalize } from '../../utils/helpers/normalize';

const styles = StyleSheet.create({
  container: { flex: 1 },
  comparisonsContainer: {
    marginTop: normalize(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  chartContainer: {
    borderRadius: normalize(18),
    padding: normalize(10),
    alignItems: 'center',
  },
  chartTitle: {
    marginBottom: normalize(5),
  },
});

export default styles;
