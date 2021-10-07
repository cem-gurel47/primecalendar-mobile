import React, { useState } from 'react';
import {
  Text,
  Image,
  TextInput,
  ScrollView,
  TextInputProps,
  View,
} from 'react-native';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import styles from './styles';
import Logo from '../../assets/SignIn/logo.png';
import GoogleLogo from '../../assets/google.png';

import constants from '../../utils/constants';
import Button from '../../components/Button';
// TODO add scrollview to text components
const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const inputProps: Readonly<TextInputProps> = {
    autoCapitalize: 'none',
    style: styles.input,
    placeholderTextColor: constants.gray[4],
  };

  return (
    <CustomSafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>Welcome to Prime Calendar</Text>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          {...inputProps}
        />
        <TextInput
          placeholder="Password"
          keyboardType="visible-password"
          {...inputProps}
        />
        {/* <TextInput
          placeholder="Password repeat"
          keyboardType="visible-password"
          {...inputProps}
        /> */}
        <Button
          type="secondary"
          containerStyle={styles.button}
          loading={loading}
          onPress={() => setLoading(true)}
        >
          Continue
        </Button>
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.divider} />
        </View>
        <Button
          type="tertiary"
          containerStyle={styles.button}
          prefixIcon={<Image source={GoogleLogo} style={styles.google} />}
        >
          Continue With Google
        </Button>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default SignIn;
