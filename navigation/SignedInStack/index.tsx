import React from 'react';
import Home from '../../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const GuestStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default GuestStack;
