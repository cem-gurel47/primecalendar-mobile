import React, { useEffect, useCallback, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import constants from './utils/constants';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GuestStack from './navigation/GuestStack';
import SignedInStack from './navigation/SignedInStack';

function App() {
  const [user, setUser] = useState<string | null>(null);

  const isLoggedIn = useCallback(async () => {
    const storageUser = await AsyncStorage.getItem('user');
    setUser(storageUser);
    // await AsyncStorage.removeItem('user');
    // await AsyncStorage.removeItem('onBoardingCompleted');
  }, []);

  useEffect(() => {
    isLoggedIn();
  }, [isLoggedIn]);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: constants.black,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar style="light" />
      {user ? <SignedInStack /> : <GuestStack setUser={setUser} user={user} />}
    </NavigationContainer>
  );
}

export default App;
