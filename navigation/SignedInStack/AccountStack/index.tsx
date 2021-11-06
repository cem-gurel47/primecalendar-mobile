import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../../../screens/Account';
import Settings from '../../../screens/Account/Settings';
import SoundsAndNotificarions from '../../../screens/Account/SoundsAndNotifications';
import General from '../../../screens/Account/General';
import Theme from '../../../screens/Account/Theme';
import AnalysisAndReviews from '../../../screens/Account/AnalysisAndReviews';

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
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="General"
        component={General}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SoundsAndNotifications"
        component={SoundsAndNotificarions}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Theme"
        component={Theme}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AnalysisAndReviews"
        component={AnalysisAndReviews}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
