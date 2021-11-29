import React, { useContext } from 'react';
import { Text, TextProps } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeContext } from '../../contexts/Theme/context';
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

interface Props extends TextProps {
  type?:
    | 'Muli_200ExtraLight'
    | 'Muli_300Light'
    | 'Muli_400Regular'
    | 'Muli_500Medium'
    | 'Muli_700Bold'
    | 'Muli_800ExtraBold'
    | 'Muli_900Black'
    | 'Muli_200ExtraLight_Italic'
    | 'Muli_300Light_Italic'
    | 'Muli_400Regular_Italic'
    | 'Muli_500Medium_Italic'
    | 'Muli_600SemiBold_Italic'
    | 'Muli_700Bold_Italic'
    | 'Muli_800ExtraBold_Italic'
    | 'Muli_900Black_Italic'
    | 'Muli_600SemiBold';

  color?:
    | 'white'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'highPriority'
    | 'mediumPriority'
    | 'gradient'
    | 'descriptionColor'
    | 'black'
    | 'textSecondaryColor'
    | 'textColor';
}

const AppText: React.FC<Props> = (props) => {
  const { children, style, type, color, ...rest } = props;
  //@ts-ignore
  const { constants } = useContext(ThemeContext);
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
        style={[
          { fontFamily: type || 'Muli_500Medium' },
          // @ts-ignore
          // eslint-disable-next-line react-native/no-inline-styles
          { ...style, color: color ? constants[color] : '#fff' },
        ]}
        {...rest}
      >
        {children}
      </Text>
    );
  }
};

export default AppText;
