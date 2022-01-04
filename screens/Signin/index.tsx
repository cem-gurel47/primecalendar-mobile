import React, { useState, useContext } from 'react';
import {
  Text,
  Image,
  TextInput,
  TextInputProps,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import styles from './styles';
import Logo from '../../assets/PrimeCalendarLogo.png';
// import GoogleLogo from '../../assets/google.png';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../../utils/constants';
import Button from '../../components/Button';
import { AuthContext } from '../../contexts/Auth/context';
import UserService from '../../api/user';
import { validatePassword, validateEmail } from '../../utils/validation/index';
import { useToast } from 'react-native-styled-toast';

interface Props {
  navigation: any;
  route: any;
}
const SignIn: React.FC<Props> = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);
  // @ts-ignore
  const { user, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputProps: Readonly<TextInputProps> = {
    autoCapitalize: 'none',
    style: styles.input,
    placeholderTextColor: constants.gray[4],
  };

  // eslint-disable-next-line no-shadow
  const validate = (email: string, password: string) => {
    if (!validateEmail(email)) {
      toast({
        iconName: 'info',
        message: 'Please enter a valid email 🐈',
      });
    }
    if (!validatePassword(password)) {
      toast({
        iconName: 'info',
        message: 'Please enter a valid password 🐾',
      });
    }
    return validateEmail(email) && validatePassword(password);
  };

  const login = async () => {
    setLoading(true);
    if (validate(email, password)) {
      try {
        const firebaseUser = await UserService.signInWithEmailAndPassword(
          email,
          password,
        );
        console.log(firebaseUser, 'signin response');
        if (firebaseUser.message) {
          toast({
            iconName: 'info',
            message: firebaseUser.message,
          });
        } else if (firebaseUser.user) {
          setUser(JSON.stringify({ user: firebaseUser.user }));
        } else {
          toast({
            iconName: 'info',
            message: 'Something went wrong! Please try again later.',
          });
        }
        setLoading(false);
      } catch (error) {
        console.log(error, 'signin error');
      }
    }
    setLoading(false);
  };

  const register = async () => {
    setSignupLoading(true);
    if (validate(email, password)) {
      try {
        const firebaseUser = await UserService.createUserWithEmailAndPassword(
          email,
          password,
        );
        console.log(firebaseUser, 'signup response');
        if (firebaseUser.message) {
          toast({
            iconName: 'info',
            message: firebaseUser.message,
          });
        } else if (firebaseUser.data) {
          setUser(JSON.stringify({ user: firebaseUser.data }));
        } else {
          toast({
            iconName: 'info',
            message: 'Something went wrong! Please try again later.',
          });
        }
        setLoading(false);
      } catch (error) {
        console.log(error, 'signup error');
      }
    }
    setSignupLoading(false);
  };

  return (
    <CustomSafeAreaView>
      {!user && (
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.innerContainer}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.title}>Welcome to Prime Calendar</Text>
          </View>
          <View style={styles.innerContainer}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
              {...inputProps}
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry
              {...inputProps}
            />
            <Button
              type="secondary"
              containerStyle={styles.button}
              loading={loading}
              onPress={login}
            >
              Login
            </Button>
            <Button
              type="tertiary"
              containerStyle={styles.button}
              loading={signupLoading}
              onPress={register}
            >
              Register
            </Button>
            {/* <View style={styles.dividerContainer}>
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
            </Button> */}
          </View>
        </KeyboardAvoidingView>
      )}
    </CustomSafeAreaView>
  );
};

export default SignIn;
