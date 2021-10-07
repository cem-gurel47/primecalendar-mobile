import React, { useState, useCallback } from 'react';
import { Text, Image } from 'react-native';
import styles from './styles';
import TaskCreation from '../../assets/OnBoarding/task-creation.png';
import ScheduleTasks from '../../assets/OnBoarding/schedule-tasks.png';
import Analyze from '../../assets/OnBoarding/analyze.png';
import Button from '../../components/Button';
import Steps from '../../components/Steps';
import SwipeGestures from 'react-native-swipe-gestures';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
interface OnBoardingProps {
  navigation: any;
}

const OnBoarding: React.FC<OnBoardingProps> = ({ navigation }) => {
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

  const onSwipeLeft = useCallback(() => {
    if (step !== 2) {
      setStep(step + 1);
    }
  }, [step]);

  const onSwipeRight = useCallback(() => {
    if (step !== 0) {
      setStep(step - 1);
    }
  }, [step]);

  return (
    <CustomSafeAreaView>
      <Text style={styles.title}>{onBoardingSteps[step].title}</Text>
      <Text style={styles.description}>
        {onBoardingSteps[step].description}
      </Text>

      <SwipeGestures
        onSwipeRight={onSwipeRight}
        onSwipeLeft={onSwipeLeft}
        style={styles.imageContainer}
      >
        <Image
          source={onBoardingSteps[step].image}
          style={styles.image}
          resizeMode="contain"
        />
      </SwipeGestures>
      <Steps stepsCount={onBoardingSteps.length} currentStep={step + 1} />
      <Button onPress={onPress} type="secondary" containerStyle={styles.button}>
        Next
      </Button>
    </CustomSafeAreaView>
  );
};
export default OnBoarding;
