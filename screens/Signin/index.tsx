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
import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../../utils/constants';
import Button from '../../components/Button';
// TODO add form validation
interface Props {
  navigation: any;
  route: any;
}
const SignIn: React.FC<Props> = ({ route }) => {
  const [loading, setLoading] = useState(false);
  const setUser = route.params.setUser;

  const inputProps: Readonly<TextInputProps> = {
    autoCapitalize: 'none',
    style: styles.input,
    placeholderTextColor: constants.gray[4],
  };

  const onContinueButtonPress = async () => {
    setLoading(true);
    await AsyncStorage.setItem('user', JSON.stringify({ user: 'user' }));
    setLoading(false);
    setUser(JSON.stringify({ user: 'user' }));
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
          onPress={onContinueButtonPress}
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
