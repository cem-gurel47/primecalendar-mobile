import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';
import styles from './styles';
import AppText from '../../AppText';
import Button from '../../Button';

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleting: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

const DeleteTaskModal: React.FC<Props> = ({
  modalVisible,
  setModalVisible,
  setIsDeleting,
  setSelectedTasks,
}) => {
  const [loading, setLoading] = useState(false);

  const onFinish = () => {
    setLoading(true);
    setModalVisible(false);
    setLoading(false);
    setIsDeleting(false);
    setSelectedTasks([]);
  };

  const onCancelPress = () => {
    setModalVisible(false);
    setIsDeleting(false);
    setSelectedTasks([]);
  };

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
