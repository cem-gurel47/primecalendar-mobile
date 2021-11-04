import React, { useState } from 'react';
import { View, Modal } from 'react-native';
import styles from './styles';
import AppText from '../../AppText';
import Button from '../../Button';
interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteTaskModal: React.FC<Props> = ({
  modalVisible,
  setModalVisible,
}) => {
  const [loading, setLoading] = useState(false);

  const onFinish = () => {
    setLoading(true);
    setModalVisible(false);
    setLoading(false);
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AppText style={styles.modalText}>Hello World!</AppText>
            <Button type="primary" loading={loading} onPress={onFinish}>
              Delete
            </Button>
            <Button type="highPriority">Cancel</Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DeleteTaskModal;
