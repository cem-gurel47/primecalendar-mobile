import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, ViewProps, View } from 'react-native';
import { ThemeContext } from '../../contexts/Theme/context';
import { normalize } from '../../utils/helpers/normalize';

interface Props extends ViewProps {
  children: React.ReactNode;
}

const CustomSafeAreaView = (props: Props) => {
  //@ts-ignore
  const { constants } = useContext(ThemeContext);
  const { children, ...rest } = props;
  return (
    //@ts-ignore
    <SafeAreaView {...rest} style={styles.container(constants)}>
      <View style={styles.innerContainer}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //@ts-ignore
  container: (constants) => ({
    flexGrow: 1,
    backgroundColor: constants.black,
    alignItems: 'center',
  }),
  innerContainer: {
    width: '100%',
    flex: 1,
    paddingHorizontal: normalize(10),
  },
});

export default CustomSafeAreaView;
