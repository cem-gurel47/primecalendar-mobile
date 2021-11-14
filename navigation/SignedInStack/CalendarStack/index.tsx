import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateATask from '../../../screens/CreateATask';
const Stack = createStackNavigator();

const CalendarStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Calendar"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Calendar"
        component={CreateATask}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CalendarStack;
