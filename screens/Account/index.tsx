/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';

const index = () => {
  return (
    <CustomSafeAreaView>
      <Text style={{ color: '#fff' }}>Account</Text>
    </CustomSafeAreaView>
  );
};

export default index;
