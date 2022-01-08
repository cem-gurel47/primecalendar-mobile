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
import TaskContextProvider from './contexts/Task/context';
import { ThemeProvider } from 'styled-components';
import { ToastProvider } from 'react-native-styled-toast';
import toastTheme from './utils/constants/toastTheme';
import ITask from './models/task';

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
  const [tasks, setTasks] = useState<[] | ITask[]>([]);
  const [notificationAccess, setNotificationAccess] = useState<boolean | null>(
    true,
  );
  const [theme, setTheme] = useState<string | null>('dark');

  console.log('user info', user);

  const getUserAndSettingsInfo = useCallback(async () => {
    const storageUser = await AsyncStorage.getItem('user');
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
    //@ts-ignore
    setUser(JSON.parse(storageUser));
  }, []);

  useEffect(() => {
    getUserAndSettingsInfo();

    return () => {
      //@ts-ignore
      setNotificationAccess();
      setTheme('dark');
    };
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
            <ThemeProvider theme={toastTheme}>
              <ToastProvider maxToasts={2}>
                <TaskContextProvider
                  value={{
                    tasks,
                    setTasks,
                  }}
                >
                  {user ? <SignedInStack /> : <GuestStack />}
                </TaskContextProvider>
              </ToastProvider>
            </ThemeProvider>
          </ThemeContextProvider>
        </NotificationsContextProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default App;
