import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../../../screens/Settings';

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
