import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import constants from '../../utils/constants';
import HomeStack from './HomeStack';
import CreateTaskStack from './CreateTaskStack';
import HighlightsStack from './HighlightsStack';
import SettingsStack from './SettingsStack';

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
        name="CreateTaskStack"
        component={CreateTaskStack}
        options={{
          tabBarIcon: (tabBarInfo) => (
            <Ionicons name="calendar-sharp" {...tabBarInfo} />
          ),
          tabBarLabel: 'Create a Task',
          header: () => undefined,
        }}
      />
      <Tab.Screen
        name="HighlightsStack"
        component={HighlightsStack}
        options={{
          tabBarIcon: (tabBarInfo) => (
            <AntDesign name="barschart" {...tabBarInfo} />
          ),
          tabBarLabel: 'Highlights',
          header: () => undefined,
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          tabBarIcon: (tabBarInfo) => (
            <Ionicons name="settings-sharp" {...tabBarInfo} />
          ),
          tabBarLabel: 'Settings',
          header: () => undefined,
        }}
      />
    </Tab.Navigator>
  );
};

export default SignedInStack;
