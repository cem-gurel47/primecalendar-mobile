import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import constants from '../../utils/constants';
import HomeStack from './HomeStack';
import CalendarStack from './CalendarStack';
import AccountStack from './AccountStack';

const Tab = createBottomTabNavigator();

const SignedInStack = () => {
  const inactiveColor = constants.gray[4];
  const activeColor = constants.gradient;

  return (
    <Tab.Navigator
      //@ts-ignore
      tabBarOptions={{
        activeTintColor: activeColor,
        inactiveTintColor: inactiveColor,
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: constants.gray[7],
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
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
        name="Calendar"
        component={CalendarStack}
        options={{
          tabBarIcon: (tabBarInfo) => (
            <Ionicons name="calendar-sharp" {...tabBarInfo} />
          ),
          header: () => undefined,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          tabBarIcon: (tabBarInfo) => (
            <MaterialCommunityIcons name="account" {...tabBarInfo} />
          ),
          header: () => undefined,
        }}
      />
    </Tab.Navigator>
  );
};

export default SignedInStack;
