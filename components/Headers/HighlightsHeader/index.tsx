import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { normalize } from '../../../utils/helpers/normalize';
import AppText from '../../AppText';

const CreateTaskHeader: React.FC<ViewProps> = (props) => {
  return (
    <View style={styles.container} {...props}>
      <AppText color="white" style={styles.title}>
        Highlights
      </AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: '5%',
    paddingHorizontal: '1%',
    alignItems: 'center',
  },
  title: {
    fontSize: normalize(20),
  },
});

export default CreateTaskHeader;
