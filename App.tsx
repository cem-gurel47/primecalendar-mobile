/* eslint-disable no-shadow */
import React, { useEffect, useCallback, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { lightTheme, darkTheme } from './utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GuestStack from './navigation/GuestStack';
import SignedInStack from './navigation/SignedInStack';
import { StatusBar } from 'expo-status-bar';
import NotificationsContextProvider from './contexts/Notifications/context';
import ThemeContextProvider from './contexts/Theme/context';
import AuthContextProvider from './contexts/Auth/context';
import { ThemeProvider } from 'styled-components';
import { ToastProvider } from 'react-native-styled-toast';
import toastTheme from './utils/constants/toastTheme';
import firebase from 'firebase';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000',
  },
};

function App() {
  //@ts-ignore
  const [user, setUser] = useState();
  const [notificationAccess, setNotificationAccess] = useState<boolean | null>(
    true,
  );
  const [theme, setTheme] = useState<string | null>('dark');
  console.log(user);

  const getUserAndSettingsInfo = useCallback(async () => {
    const storageNotificationAccess = await AsyncStorage.getItem(
      'notificationAccess',
    );
    const storageTheme = await AsyncStorage.getItem('theme');
    setNotificationAccess(
      storageNotificationAccess !== null
        ? JSON.parse(storageNotificationAccess)
        : false,
    );
    setTheme(storageTheme || 'dark');
  }, []);

  useEffect(() => {
    getUserAndSettingsInfo();

    return () => {
      //@ts-ignore
      setNotificationAccess();
      setTheme('dark');
    };
  }, [getUserAndSettingsInfo]);

  useEffect(() => {
    const cleanup = firebase.auth().onAuthStateChanged((user) => {
      //@ts-ignore
      setUser(user);
    });
    return () => {
      cleanup();
      //@ts-ignore
      setUser();
    };
  }, []);

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar style="light" />
      <AuthContextProvider value={{ user, setUser }}>
        <NotificationsContextProvider
          value={{ notificationAccess, setNotificationAccess }}
        >
          <ThemeContextProvider
            value={{
              theme,
              setTheme,
              constants: theme === 'dark' ? darkTheme : lightTheme,
            }}
          >
            <ThemeProvider theme={toastTheme}>
              <ToastProvider maxToasts={2}>
                {user ? <SignedInStack /> : <GuestStack />}
              </ToastProvider>
            </ThemeProvider>
          </ThemeContextProvider>
        </NotificationsContextProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default App;
