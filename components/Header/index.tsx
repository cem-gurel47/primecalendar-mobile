import React from 'react';
import { Header, HeaderProps } from 'react-native-elements';
import constants from '../../utils/constants';
import { StyleSheet } from 'react-native';

const AppHeader: React.FC<HeaderProps> = (props) => (
  <Header {...props} containerStyle={styles.header} />
);
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    borderBottomWidth: 0,
    backgroundColor: constants.gray[5],
    justifyContent: 'space-around',
  },
});

export default AppHeader;
