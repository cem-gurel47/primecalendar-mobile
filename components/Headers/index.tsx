import React from 'react';
import { StyleSheet, View, ViewProps, TouchableOpacity } from 'react-native';
import AppText from '../AppText';
import { Ionicons } from '@expo/vector-icons';
import constants from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';

interface Props extends ViewProps {
  title: string;
}

const Header: React.FC<Props> = (props) => {
  const navigation = useNavigation();
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
    left: '5%',
  },
  title: {
    fontSize: 24,
  },
});

export default Header;
