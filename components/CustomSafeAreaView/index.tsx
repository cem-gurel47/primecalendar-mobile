import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import constants from '../../utils/constants';

interface Props {
  children: React.ReactNode;
}

const CustomSafeAreaView = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <SafeAreaView {...rest} style={styles.container}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    flexGrow: 1,
    backgroundColor: constants.black,
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
});

export default CustomSafeAreaView;
