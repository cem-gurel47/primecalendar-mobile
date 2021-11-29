import React, { useEffect, useCallback, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { lightTheme, darkTheme } from './utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GuestStack from './navigation/GuestStack';
import SignedInStack from './navigation/SignedInStack';
import { StatusBar } from 'expo-status-bar';
import AuthContextProvider from './contexts/Auth/context';
import NotificationsContextProvider from './contexts/Notifications/context';
import ThemeContextProvider from './contexts/Theme/context';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000',
  },
};

function App() {
  const [user, setUser] = useState<string | null>(null);
  const [notificationAccess, setNotificationAccess] = useState<boolean | null>(
    true,
  );
  const [theme, setTheme] = useState<string | null>('dark');

  const getUserAndSettingsInfo = useCallback(async () => {
    const storageUser = await AsyncStorage.getItem('user');
    const storageNotificationAccess = await AsyncStorage.getItem(
      'notificationAccess',
    );
    const storageTheme = await AsyncStorage.getItem('theme');
    setUser(storageUser);
    setNotificationAccess(
      storageNotificationAccess !== null
        ? JSON.parse(storageNotificationAccess)
        : false,
    );
    setTheme(storageTheme || 'dark');
  }, []);

  useEffect(() => {
    getUserAndSettingsInfo();
  }, [getUserAndSettingsInfo]);

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
            {user ? <SignedInStack /> : <GuestStack />}
          </ThemeContextProvider>
        </NotificationsContextProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default App;
