/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import AppText from '../../components/AppText';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import Task from '../../models/task';

interface Props {
  route: {
    params: {
      task: Task;
    };
  };
}

const TaskDetails: React.FC<Props> = (props) => {
  const { task } = props.route.params;
  return (
    <CustomSafeAreaView>
      <AppText color="white" style={{ fontSize: 24 }}>
        {task.title}
      </AppText>
    </CustomSafeAreaView>
  );
};

export default TaskDetails;
