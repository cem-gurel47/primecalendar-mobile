import React, { useState, useContext } from 'react';
import {
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../../utils/constants';
import Button from '../../components/Button';
import { AuthContext } from '../../contexts/Auth/context';
import UserService from '../../api/user';
import { validatePassword, validateEmail } from '../../utils/validation/index';
import { useToast } from 'react-native-styled-toast';
import { Tab, TabView } from 'react-native-elements';

interface Props {
  navigation: any;
  route: any;
}

const SignIn: React.FC<Props> = () => {
  const { toast } = useToast();
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  // @ts-ignore
  const { user, setUser } = useContext(AuthContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
        const userInfo = await UserService.login(email, password);
        await AsyncStorage.setItem('user', JSON.stringify(userInfo));
        setUser(userInfo);
      } catch (error) {
        toast({
          iconName: 'info',
          message: 'Invalid Credentials',
        });
      }
    }
    setLoading(false);
  };

  const register = async () => {
    setLoading(true);
    const validated = firstName && lastName;
    if (validate(email, password) && validated) {
      try {
        const userInfo = await UserService.register(
          firstName,
          lastName,
          email,
          password,
        );
        await AsyncStorage.setItem('user', JSON.stringify(userInfo));
        setUser(userInfo);
      } catch (error) {
        toast({
          iconName: 'info',
          message:
            'Email already exists, please try with another email account',
        });
      }
    }
    setLoading(false);
  };

  const LoginForm = () => (
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
    </View>
  );

  const RegisterForm = () => (
    <View style={styles.innerContainer}>
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
        keyboardType="default"
        {...{
          ...inputProps,
          autoCapitalize: 'words',
        }}
      />
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
        keyboardType="default"
        {...{
          ...inputProps,
          autoCapitalize: 'words',
        }}
      />
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
        onPress={register}
      >
        Register
      </Button>
    </View>
  );

  return (
    <CustomSafeAreaView>
      {!user && (
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.innerContainer}>
            <Image source={Logo} style={styles.logo} />
            {/* <Text style={styles.title}>Welcome to Prime Calendar</Text> */}
          </View>
          <Tab
            value={index}
            onChange={(e) => {
              setIndex(e);
            }}
            indicatorStyle={styles.indicatorStyle}
            variant="default"
          >
            <Tab.Item
              title="Login"
              titleStyle={styles.tabTitle}
              icon={{ name: 'login', type: 'antdesign', color: 'white' }}
            />
            <Tab.Item
              title="Register"
              titleStyle={styles.tabTitle}
              icon={{ name: 'addusergroup', type: 'antdesign', color: 'white' }}
            />
          </Tab>
          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={styles.tabViewStyles}>
              <View>
                <LoginForm />
              </View>
            </TabView.Item>
            <TabView.Item style={styles.tabViewStyles}>
              <RegisterForm />
            </TabView.Item>
          </TabView>
        </KeyboardAvoidingView>
      )}
    </CustomSafeAreaView>
  );
};

export default SignIn;
