/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Image, FlatList, View } from 'react-native';
import styles from './styles';
import NoteImage from '../../assets/note.png';
import HomeHeader from '../../components/Headers/HomeHeader';
import ScrollableCalendar from './ScrollableCalendar';
import AppText from '../../components/AppText';
import moment from 'moment';
import { SpeedDial } from 'react-native-elements';
import Task from '../../components/Task';
import DummyTaskData from '../../dummy_data/task';
import DeleteTaskModal from '../../components/Modals/DeleteTaskModal';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';

//@ts-ignore
const Home = ({ navigation }) => {
  const [isEditButtonOpen, setIsEditButtonOpen] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [date, setDate] = useState(moment());

  const data = DummyTaskData.filter(
    (task) =>
      moment(task.date).format('YYYY-MM-DD') === date.format('YYYY-MM-DD'),
  );

  const onAddTaskPress = () => {
    navigation.navigate('CreateTaskStack', {}, { screen: 'CreateTask' });
    setIsEditButtonOpen(false);
  };

  return (
    <CustomSafeAreaView>
      <HomeHeader
        date={date}
        isDeleting={isDeleting}
        setIsDeleting={setIsDeleting}
      />
      <ScrollableCalendar date={date} setDate={setDate} />
      {data.length === 0 ? (
        <Image source={NoteImage} style={styles.image} />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
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
          if (isDeleting && selectedTasks.length > 0) {
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
          onPress={onAddTaskPress}
        />

        {data.length > 0 ? (
          <SpeedDial.Action
            buttonStyle={styles.addButton}
            icon={{ name: 'delete', color: '#fff' }}
            title={
              <AppText type="Muli_700Bold" color="black">
                Delete
              </AppText>
            }
            onPress={() => {
              setIsDeleting(true);
              setIsEditButtonOpen(false);
            }}
          />
        ) : (
          <View />
        )}
      </SpeedDial>

      <DeleteTaskModal
        setSelectedTasks={setSelectedTasks}
        setIsDeleting={setIsDeleting}
        modalVisible={isDeleteModalVisible}
        setModalVisible={setIsDeleteModalVisible}
      />
    </CustomSafeAreaView>
  );
};

export default Home;
