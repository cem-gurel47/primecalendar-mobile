import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/Theme/context';
import {
  StyleSheet,
  View,
  ViewProps,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import AppText from '../../AppText';
import { AntDesign } from '@expo/vector-icons';
import { normalize } from '../../../utils/helpers/normalize';

interface Props extends ViewProps {
  date: moment.Moment;
  isDeleting: boolean;
  setIsDeleting: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomeHeader: React.FC<Props> = (props) => {
  //@ts-ignore
  const { constants } = useContext(ThemeContext);
  const { date, isDeleting, setIsDeleting, ...rest } = props;
  const currentMonth = date.format('MMMM');
  const day = date.format('DD');

  const onCancelPress = () => {
    setIsDeleting(false);
  };
  return (
    //@ts-ignore
    <View {...rest} style={styles.container(constants)}>
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

export const styles = StyleSheet.create({
  //@ts-ignore
  container: (constants) => ({
    backgroundColor: constants.black,
    borderBottomWidth: 0,
    paddingVertical: '5%',
    paddingHorizontal: '1%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }),
  headerText: {
    fontSize: normalize(24),
  },
  closeIcon: {
    marginRight: '4%',
  },
});

export default HomeHeader;
