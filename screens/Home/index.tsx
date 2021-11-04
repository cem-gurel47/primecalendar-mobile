/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Image, FlatList, SafeAreaView } from 'react-native';
import styles from './styles';
import NoteImage from '../../assets/note.png';
import HomeHeader from '../../components/Header/HomeHeader';
import ScrollableCalendar from './ScrollableCalendar';
import AppText from '../../components/AppText';
import moment from 'moment';
import { SpeedDial } from 'react-native-elements';
import Task from '../../components/Task';
import DummyTaskData from '../../dummy_data/task';
import DeleteTaskModal from '../../components/Modals/DeleteTaskModal';

const Home = () => {
  const [isEditButtonOpen, setIsEditButtonOpen] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [date, setDate] = useState(moment());

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader date={date} />
      <ScrollableCalendar date={date} setDate={setDate} />
      {DummyTaskData.length === 0 ? (
        <Image source={NoteImage} style={styles.image} />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id}
          data={DummyTaskData}
          renderItem={(info) => (
            <Task
              {...info}
              isDeleting={isDeleting}
              selectedTasks={selectedTasks}
              setSelectedTasks={setSelectedTasks}
            />
          )}
          style={{ flex: 1, width: '100%' }}
        />
      )}
      <SpeedDial
        buttonStyle={styles.addButton}
        isOpen={isEditButtonOpen}
        icon={{ name: isDeleting ? 'delete' : 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => {
          if (isDeleting) {
            setIsDeleteModalVisible(true);
          } else {
            setIsEditButtonOpen(!isEditButtonOpen);
          }
        }}
        onClose={() => {
          setIsEditButtonOpen(!isEditButtonOpen);
          //setIsDeleting(false);
        }}
      >
        <SpeedDial.Action
          buttonStyle={styles.addButton}
          icon={{ name: 'add', color: '#fff' }}
          title={
            <AppText type="Muli_700Bold" color="black">
              Add
            </AppText>
          }
          onPress={() => console.log('Add Something')}
        />
        <SpeedDial.Action
          buttonStyle={styles.addButton}
          icon={{ name: 'delete', color: '#fff' }}
          title={
            <AppText type="Muli_700Bold" color="black">
              Delete
            </AppText>
          }
          onPress={() => setIsDeleting(true)}
        />
      </SpeedDial>
      <DeleteTaskModal
        modalVisible={isDeleteModalVisible}
        setModalVisible={setIsDeleteModalVisible}
      />
    </SafeAreaView>
  );
};

export default Home;
