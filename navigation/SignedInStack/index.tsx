import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import constants from '../../utils/constants';
import HomeStack from './HomeStack';
import CalendarStack from './CalendarStack';
import AccountStack from './AccountStack';
import { enableScreens } from 'react-native-screens';
enableScreens(true);

const Tab = createBottomTabNavigator();

const SignedInStack = () => {
  const inactiveColor = constants.gray[4];
  const activeColor = constants.gradient;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarStyle: {
          backgroundColor: constants.gray[7],
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: (tabBarInfo) => (
            <FontAwesome name="home" {...tabBarInfo} />
          ),
          tabBarLabel: 'Home',
          header: () => undefined,
        }}
      />
      <Tab.Screen
        name="CalendarStack"
        component={CalendarStack}
        options={{
          tabBarIcon: (tabBarInfo) => (
            <Ionicons name="calendar-sharp" {...tabBarInfo} />
          ),
          tabBarLabel: 'Calendar',
          header: () => undefined,
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          tabBarIcon: (tabBarInfo) => (
            <MaterialCommunityIcons name="account" {...tabBarInfo} />
          ),
          tabBarLabel: 'Account',
          header: () => undefined,
        }}
      />
    </Tab.Navigator>
  );
};

export default SignedInStack;
