import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  type?: 'primary' | 'secondary' | 'highPriority' | 'mediumPriority';
}

const AppButton: React.FC<Props> = (props) => {
  const { children, type, ...rest } = props;
  return (
    <TouchableOpacity {...rest} style={styles.container} activeOpacity={0.8}>
      <Text style={styles.styles(type || 'primary')}>{children}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
