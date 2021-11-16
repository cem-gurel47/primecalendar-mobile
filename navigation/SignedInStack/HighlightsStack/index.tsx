import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AnalysisAndReviews from '../../../screens/Highlights';

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AnalysisAndReviews"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="AnalysisAndReviews"
        component={AnalysisAndReviews}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
