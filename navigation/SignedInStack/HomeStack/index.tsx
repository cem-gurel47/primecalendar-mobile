import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../screens/Home';
import TaskDetails from '../../../screens/TaskDetails';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
