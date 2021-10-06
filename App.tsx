import React, { useCallback, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from './screens/OnBoarding';
import SignIn from './screens/Signin';
import { StatusBar } from 'expo-status-bar';
import { AsyncStorage } from 'react-native';
import constants from './utils/constants';

const Stack = createStackNavigator();

function App() {
  const isOnBoardingComplete = useCallback(async () => {
    const isCompleted = await AsyncStorage.getItem('isOnBoardingComplete');
    return isCompleted;
  }, []);

  useEffect(() => {
    isOnBoardingComplete();
  }, [isOnBoardingComplete]);

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
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={SignIn}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
