import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import constants from '../../utils/constants';
import { ThemeContext } from '../../contexts/Theme/context';

interface Props {
  children: React.ReactNode;
}

const CustomSafeAreaView = (props: Props) => {
  //@ts-ignore
  const { theme } = useContext(ThemeContext);
  const { children, ...rest } = props;
  return (
    //@ts-ignore
    <SafeAreaView {...rest} style={styles.container(theme)}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //@ts-ignore
  container: (theme) => ({
    paddingTop: '10%',
    flexGrow: 1,
    backgroundColor: theme === 'dark' ? constants.black : constants.white,
    alignItems: 'center',
    paddingHorizontal: '2%',
  }),
});

export default CustomSafeAreaView;
