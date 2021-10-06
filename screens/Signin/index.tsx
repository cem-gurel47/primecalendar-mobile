import React from 'react';
import { Text, Image, TextInput } from 'react-native';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import styles from './styles';
import Logo from '../../assets/SignIn/logo.png';
import constants from '../../utils/constants';
// TODO add scrollview to text components
const SignIn = () => {
  return (
    <CustomSafeAreaView>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Welcome to Prime Calendar</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor={constants.gray[4]}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        placeholderTextColor={constants.gray[4]}
        keyboardType="visible-password"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password repeat"
        style={styles.input}
        placeholderTextColor={constants.gray[4]}
        keyboardType="visible-password"
        autoCapitalize="none"
      />
    </CustomSafeAreaView>
  );
};

export default SignIn;
