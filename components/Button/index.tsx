import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator,
  View,
  TextStyle,
  ViewStyle,
} from 'react-native';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  type?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'highPriority'
    | 'mediumPriority';
  loading?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const AppButton: React.FC<Props> = (props) => {
  const {
    children,
    type,
    loading,
    prefixIcon,
    suffixIcon,
    textStyle,
    containerStyle,
    ...rest
  } = props;
  return (
    <TouchableOpacity
      {...rest}
      style={[styles.container(type), containerStyle]}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <View style={styles.textContainer}>
          <View>{prefixIcon}</View>
          <Text style={[styles.styles, textStyle]}>{children}</Text>
          <View>{suffixIcon}</View>
        </View>
      )}
      {suffixIcon}
    </TouchableOpacity>
  );
};

export default AppButton;
