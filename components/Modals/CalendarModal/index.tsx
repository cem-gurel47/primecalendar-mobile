import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';
import styles from '../DeleteTaskModal/styles';
import AppText from '../../AppText';
import Button from '../../Button';
import CalendarComponent from '../../Calendar';
import moment from 'moment';

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

const DeleteTaskModal: React.FC<Props> = ({
  modalVisible,
  setModalVisible,
  date,
  setDate,
}) => {
  const [dateHolder, setDateHolder] = useState(date);

  const onFinish = () => {
    setDate(moment(dateHolder).format('DD-MM-YYYY'));
    setModalVisible(false);
  };

  const onCancelPress = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <Modal
        isVisible={modalVisible}
        swipeDirection="down"
        backdropOpacity={0.6}
        backdropColor="black"
        onDismiss={onCancelPress}
        onSwipeComplete={onCancelPress}
        propagateSwipe={true}
        onBackdropPress={onCancelPress}
      >
        <View style={styles.modalStyles}>
          <AppText
            style={styles.textStyle}
            type="Muli_600SemiBold"
            color="white"
          >
            Select a date for your task
          </AppText>
          <CalendarComponent date={dateHolder} setDate={setDateHolder} />
          <Button
            onPress={onCancelPress}
            type="primary"
            containerStyle={styles.cancelButtonStyle}
          >
            Cancel
          </Button>
          <Button
            onPress={onFinish}
            type="secondary"
            containerStyle={styles.deleteButtonStyle}
          >
            Select
          </Button>
        </View>
      </Modal>
    </View>
  );
};

export default DeleteTaskModal;
