import React from 'react';
import {
  StyleSheet,
  View,
  ViewProps,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import constants from '../../../utils/constants';
import moment from 'moment';
import AppText from '../../AppText';
import { AntDesign } from '@expo/vector-icons';
interface Props extends ViewProps {
  date: moment.Moment;
  isDeleting: boolean;
  setIsDeleting: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomeHeader: React.FC<Props> = (props) => {
  const { date, isDeleting, setIsDeleting, ...rest } = props;
  const currentMonth = date.format('MMMM');
  const day = date.format('DD');

  const onCancelPress = () => {
    setIsDeleting(false);
  };
  return (
    <View {...rest} style={styles.container}>
      <AppText
        style={styles.headerText}
        color="white"
      >{`${currentMonth}, ${day}`}</AppText>
      {isDeleting && (
        <TouchableOpacity onPress={onCancelPress}>
          <AntDesign
            name="close"
            size={24}
            color="#fff"
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.black,
    borderBottomWidth: 0,
    paddingVertical: '5%',
    paddingHorizontal: '1%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerText: {
    fontSize: 24,
    color: constants.white,
  },
  closeIcon: {
    marginRight: '4%',
  },
});

export default HomeHeader;
