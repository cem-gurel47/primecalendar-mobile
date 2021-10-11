import React from 'react';
import { StyleSheet, View, ViewProps, StatusBar, Platform } from 'react-native';
import constants from '../../../utils/constants';
import moment from 'moment';
import AppText from '../../AppText';

interface Props extends ViewProps {
  date: moment.Moment;
}

const HomeHeader: React.FC<Props> = (props) => {
  const { date, ...rest } = props;
  const currentMonth = date.format('MMMM');
  const day = date.format('DD');
  return (
    <View {...rest} style={styles.container}>
      <AppText style={styles.headerText}>{`${currentMonth}, ${day}`}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.black,
    borderBottomWidth: 0,
    paddingVertical: '5%',
    paddingHorizontal: '1%',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerText: {
    fontSize: 24,
    color: constants.white,
  },
});

export default HomeHeader;
