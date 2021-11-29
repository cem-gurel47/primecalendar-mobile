import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme/context';
import { StyleSheet, View, ViewProps, TouchableOpacity } from 'react-native';
import AppText from '../AppText';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { normalize } from '../../utils/helpers/normalize';

interface Props extends ViewProps {
  title: string;
}

const Header: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  //@ts-ignore
  const { constants } = useContext(ThemeContext);
  return (
    <View style={styles.container} {...props}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
        <Ionicons name="arrow-back" size={24} color={constants.white} />
      </TouchableOpacity>
      <View>
        <AppText color="white" style={styles.title}>
          {props.title}
        </AppText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: '1%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '5%',
  },
  icon: {
    position: 'absolute',
    left: 5,
    top: '15%',
  },
  title: {
    fontSize: normalize(20),
  },
});

export default Header;
