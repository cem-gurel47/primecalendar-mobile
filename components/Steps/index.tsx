import React from 'react';
import { StyleSheet, View } from 'react-native';
import constants from '../../utils/constants';

interface Props {
  stepsCount: number;
  currentStep: number;
}

const Steps: React.FC<Props> = ({ stepsCount, currentStep }) => {
  return (
    <View style={styles.container}>
      {new Array(stepsCount).fill(undefined).map((_, index) => (
        <View
          key={`step-${index}`}
          style={[
            styles.circleStyles,
            currentStep === index + 1 ? styles.active : styles.inactive,
          ]}
        />
      ))}
    </View>
  );
};

export default Steps;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 38,
    marginBottom: '5%',
  },
  circleStyles: {
    width: 8,
    aspectRatio: 1,
    borderRadius: 15,
  },
  inactive: {
    backgroundColor: constants.gray[5],
  },
  active: {
    backgroundColor: '#fff',
  },
});
