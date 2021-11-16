import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateATask from '../../../screens/CreateATask';
const Stack = createStackNavigator();

const CalendarStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CreateTask"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="CreateTask"
        component={CreateATask}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CalendarStack;
