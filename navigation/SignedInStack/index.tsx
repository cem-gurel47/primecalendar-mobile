import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../../screens/Home';
import Calendar from '../../screens/Calendar';
import Account from '../../screens/Account';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import constants from '../../utils/constants';

const Tab = createMaterialBottomTabNavigator();

const SignedInStack = () => {
  const inactiveColor = constants.gray[4];
  const activeColor = constants.gradient;

  return (
    <Tab.Navigator
      shifting
      activeColor={constants.secondary}
      barStyle={{
        backgroundColor: constants.gray[8],
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={25}
              color={focused ? activeColor : inactiveColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="calendar-sharp"
              size={25}
              color={focused ? activeColor : inactiveColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="account"
              size={25}
              color={focused ? activeColor : inactiveColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default SignedInStack;
