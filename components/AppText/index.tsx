/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { Text, TextProps } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Muli_200ExtraLight,
  Muli_300Light,
  Muli_400Regular,
  Muli_500Medium,
  Muli_700Bold,
  Muli_800ExtraBold,
  Muli_900Black,
  Muli_200ExtraLight_Italic,
  Muli_300Light_Italic,
  Muli_400Regular_Italic,
  Muli_500Medium_Italic,
  Muli_600SemiBold_Italic,
  Muli_700Bold_Italic,
  Muli_800ExtraBold_Italic,
  Muli_900Black_Italic,
  Muli_600SemiBold,
} from '@expo-google-fonts/muli';

interface Props extends TextProps {}

const AppText: React.FC<Props> = (props) => {
  const { children, style, ...rest } = props;
  let [fontsLoaded] = useFonts({
    Muli_200ExtraLight,
    Muli_300Light,
    Muli_400Regular,
    Muli_500Medium,
    Muli_700Bold,
    Muli_800ExtraBold,
    Muli_900Black,
    Muli_200ExtraLight_Italic,
    Muli_300Light_Italic,
    Muli_400Regular_Italic,
    Muli_500Medium_Italic,
    Muli_600SemiBold_Italic,
    Muli_700Bold_Italic,
    Muli_800ExtraBold_Italic,
    Muli_900Black_Italic,
    Muli_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Text
        // @ts-ignore
        style={[{ fontFamily: 'Muli_500Medium' }, { ...style }]}
        {...rest}
      >
        {children}
      </Text>
    );
  }
};

export default AppText;
