/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Image,
  FlatList,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import NoteImage from '../../assets/note.png';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import constants from '../../utils/constants';
import HomeHeader from '../../components/Header/HomeHeader';
import ScrollableCalendar from './ScrollableCalendar';
import AppText from '../../components/AppText';
import moment from 'moment';
import { SpeedDial } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Task from '../../models/task';
const Home = () => {
  const navigation = useNavigation();
  const [isAddButtonOpen, setIsAddButtonOpen] = useState(false);
  const [date, setDate] = useState(moment());
  const iconSize = 30;
  const icons = {
    sports: (
      <MaterialCommunityIcons
        name="weight-lifter"
        color={constants.secondary}
        size={iconSize}
      />
    ),
    study: (
      <MaterialCommunityIcons
        name="chair-school"
        color={constants.primary}
        size={iconSize}
      />
    ),
    leisure: (
      <FontAwesome
        name="coffee"
        color={constants.mediumPriority}
        size={iconSize}
      />
    ),
    other: (
      <MaterialCommunityIcons
        name="lock-question"
        color={constants.descriptionColor}
        size={iconSize}
      />
    ),
  };
  const data: Task[] = [
    {
      id: '0',
      type: 'sports',
      title: 'GYM',
      start: '10:00',
      end: '12:00',
      status: 'To do',
    },
    {
      id: '1',
      type: 'study',
      title: 'ADM 2701',
      start: '13:00',
      end: '15:00',
      status: 'In Progress',
    },
    {
      id: '2',
      type: 'leisure',
      title: 'Boyz night ',
      start: '15:00',
      end: '17:00',
      status: 'To do',
    },
    {
      id: '3',
      type: 'other',
      title: '???????',
      start: '19:00',
      end: '21:00',
      status: 'To do',
    },
    {
      id: '4',
      type: 'sports',
      title: 'GYM',
      start: '10:00',
      end: '12:00',
      status: 'To do',
    },
    {
      id: '5',
      type: 'study',
      title: 'ADM 2701',
      start: '13:00',
      end: '15:00',
      status: 'To do',
    },
    {
      id: '6',
      type: 'leisure',
      title: 'Boyz night',
      start: '15:00',
      end: '17:00',
      status: 'To do',
    },
    {
      id: '7',
      type: 'other',
      title: '???????',
      start: '19:00',
      end: '21:00',
      status: 'To do',
    },
  ];

  const renderItem: React.FC<{ item: Task; index: any }> = ({
    item,
    index,
  }) => (
    <TouchableOpacity
      style={styles.taskContainer}
      onPress={() =>
        //@ts-ignore
        navigation.navigate('TaskDetails', {
          task: item,
        })
      }
    >
      <View style={styles.leftSide}>
        {/* @ts-ignore */}
        <View style={{ marginRight: 10 }}>{icons[item.type]}</View>
        <View>
          <AppText key={index} style={{ color: constants.black }}>
            {item.title}
          </AppText>
          <AppText>
            {item.start}-{item.end}
          </AppText>
        </View>
      </View>

      <View style={styles.rightSide}>
        <View style={styles.statusContainer}>
          <AppText
            type="Muli_700Bold"
            color="white"
            style={{ marginHorizontal: '10%' }}
          >
            {item.status}
          </AppText>
        </View>
        {/* <TouchableOpacity style={styles.seeDetailsButton}>
          <Feather
            name="arrow-right-circle"
            color={constants.gradient}
            size={30}
          />
        </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader date={date} />
      <ScrollableCalendar date={date} setDate={setDate} />
      {data.length === 0 ? (
        <Image source={NoteImage} style={styles.image} />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={renderItem}
          style={{ flex: 1, width: '100%' }}
        />
      )}
      <SpeedDial
        buttonStyle={styles.addButton}
        isOpen={isAddButtonOpen}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setIsAddButtonOpen(!isAddButtonOpen)}
        onClose={() => setIsAddButtonOpen(!isAddButtonOpen)}
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
          onPress={() => console.log('Delete Something')}
        />
      </SpeedDial>
    </SafeAreaView>
  );
};

export default Home;
