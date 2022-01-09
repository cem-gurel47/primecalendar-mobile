import React from 'react';
// import OnBoarding from '../../screens/OnBoarding';
import SignIn from '../../screens/Auth';
import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const GuestStack: React.FC = () => {
  // const [onBoardingCompleted, setOnBoardingCompelted] = useState<
  //   string | null | undefined
  // >(undefined);

  // const isOnboardingCompleted = useCallback(async () => {
  //   const isCompleted = await AsyncStorage.getItem('onBoardingCompleted');
  //   setOnBoardingCompelted(isCompleted);
  // }, []);

  // useEffect(() => {
  //   isOnboardingCompleted();
  // }, [isOnboardingCompleted]);

  return (
    <Stack.Navigator initialRouteName="Signin">
      {/* <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Signin"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default GuestStack;
