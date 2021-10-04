import React from 'react';
import { Button } from 'react-native';

interface Props {
  text: string;
}

const AppButton: React.FC<Props> = ({ text }) => {
  return <Button title={text} onPress={() => console.log('hello')} />;
};

export default AppButton;
