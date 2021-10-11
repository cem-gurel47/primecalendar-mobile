import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../../../screens/Account';
const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
