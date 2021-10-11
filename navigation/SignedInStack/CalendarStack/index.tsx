import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Calendar from '../../../screens/Calendar';
const Stack = createStackNavigator();

const CalendarStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Calendar"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CalendarStack;
