import React, { useState, useCallback, useEffect } from 'react';
import OnBoarding from '../../screens/OnBoarding';
import SignIn from '../../screens/Signin';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';

// TODO add loading screen

interface Props {
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

const Stack = createStackNavigator();

const GuestStack: React.FC<Props> = ({ setUser }) => {
  const [onBoardingCompleted, setOnBoardingCompelted] = useState<
    string | null | undefined
  >(undefined);

  const isOnboardingCompleted = useCallback(async () => {
    const isCompleted = await AsyncStorage.getItem('onBoardingCompleted');
    setOnBoardingCompelted(isCompleted);
  }, []);

  useEffect(() => {
    isOnboardingCompleted();
  }, [isOnboardingCompleted]);

  return onBoardingCompleted !== undefined ? (
    <Stack.Navigator
      initialRouteName={onBoardingCompleted ? 'Signin' : 'OnBoarding'}
    >
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={SignIn}
        options={{ headerShown: false }}
        initialParams={{ setUser: setUser }}
      />
    </Stack.Navigator>
  ) : (
    <CustomSafeAreaView>
      <Text>loading...</Text>
    </CustomSafeAreaView>
  );
};

export default GuestStack;
