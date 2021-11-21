import React, { useEffect, useCallback, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import constants from './utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GuestStack from './navigation/GuestStack';
import SignedInStack from './navigation/SignedInStack';
import { StatusBar } from 'expo-status-bar';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: constants.black,
  },
};

function App() {
  const [user, setUser] = useState<string | null>(null);

  const isLoggedIn = useCallback(async () => {
    const storageUser = await AsyncStorage.getItem('user');
    setUser(storageUser);
  }, []);

  useEffect(() => {
    isLoggedIn();
  }, [isLoggedIn]);

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar style="light" />
      {user ? <SignedInStack /> : <GuestStack />}
    </NavigationContainer>
  );
}

export default App;
