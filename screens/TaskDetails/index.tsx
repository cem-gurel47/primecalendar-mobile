import React from 'react';
//import AppText from '../../components/AppText';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import Task from '../../models/task';
import Header from '../../components/Headers/index';

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
      <Header title={task.title} />
    </CustomSafeAreaView>
  );
};

export default TaskDetails;
