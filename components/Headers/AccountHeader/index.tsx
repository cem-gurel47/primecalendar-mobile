import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import AppText from '../../AppText';

const AccountHeader: React.FC<ViewProps> = (props) => {
  return (
    <View style={styles.container} {...props}>
      <AppText color="white" style={styles.title}>
        Account
      </AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: '5%',
    paddingHorizontal: '1%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default AccountHeader;
