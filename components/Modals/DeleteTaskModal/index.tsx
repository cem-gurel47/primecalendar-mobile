import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';
import styles from './styles';
import AppText from '../../AppText';
import Button from '../../Button';
import TaskServices from '../../../api/task';
import { useToast } from 'react-native-styled-toast';
import ITask from '../../../models/task';

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleting: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTasks: React.Dispatch<React.SetStateAction<string[]>>;
  selectedTasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[] | []>>;
  tasks: ITask[];
}

const DeleteTaskModal: React.FC<Props> = ({
  modalVisible,
  setModalVisible,
  setIsDeleting,
  setSelectedTasks,
  selectedTasks,
  setTasks,
  tasks,
}) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onFinish = async () => {
    setLoading(true);
    try {
      await TaskServices.deleteTasks(selectedTasks);
      toast({
        message: 'Deleted Tasks Successfully',
      });
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
    setModalVisible(false);
    setTasks(tasks.filter((task) => !selectedTasks.includes(task._id)));
    setIsDeleting(false);
    setSelectedTasks([]);
  };

  const onCancelPress = () => {
    setModalVisible(false);
    setIsDeleting(false);
    setSelectedTasks([]);
  };

  console.log(selectedTasks);

  return (
    <View>
      <Modal isVisible={modalVisible}>
        <View style={styles.modalStyles}>
          <AppText
            style={styles.textStyle}
            type="Muli_600SemiBold"
            color="white"
          >
            Are you sure you want to delete your task(s)?
          </AppText>
          <Button
            onPress={onCancelPress}
            type="secondary"
            containerStyle={styles.cancelButtonStyle}
          >
            Cancel
          </Button>
          <Button
            onPress={onFinish}
            loading={loading}
            type="primary"
            containerStyle={styles.deleteButtonStyle}
          >
            Delete
          </Button>
        </View>
      </Modal>
    </View>
  );
};

export default DeleteTaskModal;
