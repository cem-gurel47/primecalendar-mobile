/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/context';
import { Image, FlatList, View, RefreshControl } from 'react-native';
import styles from './styles';
import NoteImage from '../../assets/note.png';
import HomeHeader from '../../components/Headers/HomeHeader';
import ScrollableCalendar from './ScrollableCalendar';
import AppText from '../../components/AppText';
import moment from 'moment';
import { SpeedDial } from 'react-native-elements';
import Task from '../../components/Task';
import DeleteTaskModal from '../../components/Modals/DeleteTaskModal';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import TaskServices from '../../api/task';
import ITask from '../../models/task';

//@ts-ignore
const Home = ({ navigation }) => {
  //@ts-ignore
  const { user } = useContext(AuthContext);
  const [isEditButtonOpen, setIsEditButtonOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [date, setDate] = useState(moment());
  const [tasks, setTasks] = useState<[] | ITask[]>([]);

  const onAddTaskPress = () => {
    navigation.navigate('CreateTaskStack', {}, { screen: 'CreateTask' });
    setIsEditButtonOpen(false);
  };

  const getTasks = async () => {
    setRefreshing(true);
    try {
      const dailyTasks = await TaskServices.getTasks(
        date.format('DD-MM-YYYY'),
        moment(date).format('ddd'),
        user.uid,
      );
      setTasks(dailyTasks);
    } catch (error) {
      console.log(error);
    }
    setRefreshing(false);
  };

  useEffect(() => {
    getTasks();
  }, [date]);

  return (
    <CustomSafeAreaView>
      <HomeHeader
        date={date}
        isDeleting={isDeleting}
        setIsDeleting={setIsDeleting}
      />
      <ScrollableCalendar date={date} setDate={setDate} />
      {tasks.length === 0 ? (
        <Image source={NoteImage} style={styles.image} />
      ) : (
        <FlatList
          keyExtractor={(item) => item._id}
          data={tasks}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getTasks} />
          }
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

        {tasks.length > 0 ? (
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
