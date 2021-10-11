/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Text,
  Image,
  FlatList,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../../components/Button';
import NoteImage from '../../assets/note.png';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import constants from '../../utils/constants';
import HomeHeader from '../../components/Header/HomeHeader';
import ScrollableCalendar from './ScrollableCalendar';
import moment from 'moment';
interface Task {
  type: string;
  title: string;
  start: string;
  end: string;
}

const Home = () => {
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
  const data = [
    {
      type: 'sports',
      title: 'GYM',
      start: '10:00',
      end: '12:00',
    },
    {
      type: 'study',
      title: 'ADM 2701',
      start: '13:00',
      end: '15:00',
    },
    {
      type: 'leisure',
      title: 'Boyz night',
      start: '15:00',
      end: '17:00',
    },
    {
      type: 'other',
      title: '???????',
      start: '19:00',
      end: '21:00',
    },
  ];

  const renderItem: React.FC<{ item: Task; index: any }> = ({
    item,
    index,
  }) => (
    <View style={styles.taskContainer}>
      <View style={{ marginRight: 10 }}>{icons[item.type]}</View>
      <View>
        <Text key={index} style={{ color: constants.black }}>
          {item.title}
        </Text>
        <Text>
          {item.start}-{item.end}
        </Text>
      </View>
      <TouchableOpacity style={styles.seeDetailsButton}>
        <Feather
          name="arrow-right-circle"
          color={constants.gradient}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader date={date} />
      <ScrollableCalendar date={date} setDate={setDate} />
      {data.length === 0 ? (
        <Image source={NoteImage} style={styles.image} />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          style={{ width: '100%' }}
        />
      )}
      <Button containerStyle={styles.addButton}>
        <Ionicons name="add" color="#fff" size={30} />
      </Button>
    </SafeAreaView>
  );
};

export default Home;
