import React, { useState } from 'react';
import { SafeAreaView, Text, Image } from 'react-native';
import styles from './styles';
// @ts-ignore
import TaskCreation from '../../assets/OnBoarding/task-creation.png';
// @ts-ignore
import ScheduleTasks from '../../assets/OnBoarding/schedule-tasks.png';
// @ts-ignore
import Analyze from '../../assets/OnBoarding/analyze.png';

import Button from '../../components/Button';

const OnBoarding = ({ navigation }) => {
  const [step, setStep] = useState(0);
  const onBoardingSteps = [
    {
      title: 'Task Creation',
      description: 'Create tasks in a distraction-free environment',
      image: TaskCreation,
    },
    {
      title: 'Schedule your tasks',
      description: 'So your brain remember more important things',
      image: ScheduleTasks,
    },
    {
      title: 'Analyzing Task Performance',
      description: 'To stay on track with your task completion rate',
      image: Analyze,
    },
  ];

  const onPress = () => {
    if (step !== 2) {
      setStep(step + 1);
    } else {
      navigation.navigate('Signin');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{onBoardingSteps[step].title}</Text>
      <Text style={styles.description}>
        {onBoardingSteps[step].description}
      </Text>
      <Image
        source={onBoardingSteps[step].image}
        style={styles.image}
        resizeMode="contain"
      />
      <Button onPress={onPress} type="secondary">
        Next
      </Button>
    </SafeAreaView>
  );
};
export default OnBoarding;
