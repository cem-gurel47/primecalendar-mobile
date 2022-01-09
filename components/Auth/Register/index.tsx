import React, { useState, useContext } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import Button from '../../Button';
import { AuthContext } from '../../../contexts/Auth/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserService from '../../../api/user';
import { useToast } from 'react-native-styled-toast';
import constants from '../../../utils/constants/index';
import styles from '../styles';
import {
  validateEmail,
  validatePassword,
} from '../../../utils/validation/index';

const LoginForm = () => {
  //@ts-ignore
  const { setUser } = useContext(AuthContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const validate = () => {
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

  const inputProps: Readonly<TextInputProps> = {
    autoCapitalize: 'none',
    style: styles.input,
    placeholderTextColor: constants.gray[4],
  };

  const register = async () => {
    setLoading(true);
    const validated = firstName && lastName;
    if (validate() && validated) {
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
            'Email already exists, please try with another email account.',
        });
      }
    }
    setLoading(false);
  };
  return (
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
};

export default LoginForm;
