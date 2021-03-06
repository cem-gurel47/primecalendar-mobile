import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import AppText from '../../AppText';

const CreateTaskHeader: React.FC<ViewProps> = (props) => {
  return (
    <View style={styles.container} {...props}>
      <AppText color="white" style={styles.title}>
        Settings
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
    fontSize: 24,
  },
});

export default CreateTaskHeader;
