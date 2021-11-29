import React, { useState } from 'react';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import Header from '../../components/Headers/index';
import { TextInput, View, ViewProps } from 'react-native';
import styles from '../CreateATask/styles';
import constants from '../../utils/constants';
import CalendarModal from '../../components/Modals/CalendarModal';
import moment from 'moment';
import AppText from '../../components/AppText';
import Button from '../../components/Button';
import { BottomSheet, ListItem } from 'react-native-elements';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Task from '../../models/task';
import { normalize } from '../../utils/helpers/normalize';

interface ScreenProps {
  route: {
    params: {
      task: Task;
    };
  };
}

interface Props extends ViewProps {
  taskDetail: string;
  component: React.ReactNode;
  icon?: React.ReactNode;
}

const CreateTask: React.FC<ScreenProps> = ({ route }) => {
  const { task } = route.params;
  const [taskName, setTaskName] = useState(task.title);
  const [date, setDate] = useState(moment(task.date).format('YYYY-MM-DD'));
  const [start, setStart] = useState(
    moment(task.date)
      .hours(Number(task.start.split(':')[0]))
      .minutes(Number(task.start.split(':')[1])),
  );
  const [startPickerVisible, setStartPickerVisible] = useState(false);
  const [end, setEnd] = useState(
    moment(task.date)
      .hours(Number(task.end.split(':')[0]))
      .minutes(Number(task.end.split(':')[1])),
  );
  const [endPickerVisible, setEndPickerVisible] = useState(false);
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [categorySheetVisible, setCategorySheetVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(task.category);
  const [repeats, setRepeats] = useState(task.repeats);
  const [repeatingDays, setRepeatingDays] = useState<string[]>(
    task.repeatingDays || [],
  );
  const [loading, setLoading] = useState(false);
  const iconSize = normalize(40);

  const onFinish = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const categories = [
    {
      label: 'Sports',
      icon: (
        <MaterialCommunityIcons
          name="weight-lifter"
          color={constants.secondary}
          size={iconSize}
        />
      ),
    },
    {
      label: 'Study',
      icon: (
        <MaterialCommunityIcons
          name="chair-school"
          color={constants.primary}
          size={iconSize}
        />
      ),
    },
    {
      label: 'Leisure',
      icon: (
        <FontAwesome
          name="coffee"
          color={constants.mediumPriority}
          size={iconSize}
        />
      ),
    },
    {
      label: 'Other',
      icon: (
        <MaterialCommunityIcons
          name="lock-question"
          color={constants.descriptionColor}
          size={iconSize}
        />
      ),
    },
    {
      label: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setCategorySheetVisible(false),
    },
  ];

  const TaskDetail: React.FC<Props> = (props) => {
    const { taskDetail, component, icon, ...rest } = props;
    return (
      <View style={styles.taskDetailContainer} {...rest}>
        <View style={styles.taskNameAndIconContainer}>
          {icon}
          <AppText style={styles.taskText} color="white">
            {taskDetail}
          </AppText>
        </View>
        <View>{component}</View>
      </View>
    );
  };

  const RepeatingDaysSelector: React.FC = () => {
    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const onDayPress = (day: string) => {
      if (repeatingDays.includes(day)) {
        setRepeatingDays([
          ...repeatingDays.filter((existingDay) => existingDay !== day),
        ]);
      } else {
        setRepeatingDays([...repeatingDays, day]);
      }
    };

    return (
      <View>
        <AppText color="white" style={styles.repeatingDayText}>
          Repeating days:
        </AppText>
        <View style={styles.repeatingDaysContainer}>
          {days.map((day) => (
            <TouchableOpacity
              key={day}
              onPress={() => onDayPress(day)}
              //@ts-ignore
              style={styles.repeatingDay(repeatingDays.includes(day))}
            >
              <AppText color="white">{day}</AppText>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const CategoryBottomSheet: React.FC = () => (
    <BottomSheet
      isVisible={categorySheetVisible}
      containerStyle={styles.bottomSheet}
    >
      {categories.map((l, i) => (
        <ListItem
          key={i}
          // @ts-ignore
          containerStyle={l.containerStyle || styles.listItemContainer(i)}
          onPress={
            l.onPress
              ? l.onPress
              : () => {
                  setSelectedCategory(l.label);
                  setCategorySheetVisible(false);
                }
          }
        >
          <ListItem.Content style={styles.listItem}>
            {l.icon}
            <ListItem.Title style={l.titleStyle || styles.listItemText}>
              {l.label}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </BottomSheet>
  );

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <View>
          <Header title="Task Details" />
          <TextInput
            value={taskName}
            onChangeText={setTaskName}
            keyboardType="default"
            style={styles.input}
            placeholder="Task name"
            placeholderTextColor={constants.textSecondaryColor}
          />
          <TaskDetail
            icon={
              <AntDesign
                name="clockcircleo"
                size={24}
                color={constants.icon[1]}
              />
            }
            taskDetail="Hours:"
            component={
              <View style={styles.optionButtonsContainer}>
                <Button
                  containerStyle={styles.optionButton}
                  textStyle={styles.text}
                  type="tertiary"
                  onPress={() => setStartPickerVisible(true)}
                >
                  {start.format('HH:mm')}
                </Button>
                <Button
                  containerStyle={styles.optionButton}
                  textStyle={styles.text}
                  type="tertiary"
                  onPress={() => setEndPickerVisible(true)}
                >
                  {end.format('HH:mm')}
                </Button>
              </View>
            }
          />
          <TaskDetail
            taskDetail="Date:"
            icon={
              <Fontisto
                name="date"
                size={24}
                color={constants.mediumPriority}
              />
            }
            component={
              <Button
                containerStyle={styles.modalButton}
                textStyle={styles.text}
                type="tertiary"
                onPress={() => setDateModalVisible(true)}
              >
                {moment(date).format('MMMM D')}
              </Button>
            }
          />

          <TaskDetail
            icon={
              <MaterialIcons
                name="category"
                size={24}
                color={constants.gradient}
              />
            }
            taskDetail="Category:"
            component={
              <Button
                containerStyle={styles.modalButton}
                textStyle={styles.text}
                type="tertiary"
                onPress={() => setCategorySheetVisible(true)}
              >
                {selectedCategory}
              </Button>
            }
          />

          <TaskDetail
            icon={
              <Feather name="repeat" size={24} color={constants.highPriority} />
            }
            taskDetail="Does it repeat?"
            component={
              <View style={styles.optionButtonsContainer}>
                <Button
                  containerStyle={styles.optionButton}
                  textStyle={styles.text}
                  type={repeats ? 'secondary' : 'tertiary'}
                  onPress={() => setRepeats(true)}
                >
                  Yes
                </Button>
                <Button
                  containerStyle={styles.optionButton}
                  textStyle={styles.text}
                  type={repeats ? 'tertiary' : 'secondary'}
                  onPress={() => setRepeats(false)}
                >
                  No
                </Button>
              </View>
            }
          />
          {repeats && <RepeatingDaysSelector />}

          <CalendarModal
            modalVisible={dateModalVisible}
            setModalVisible={setDateModalVisible}
            date={date}
            setDate={setDate}
          />
          {startPickerVisible && (
            <DateTimePicker
              textColor={constants.white}
              testID="dateTimePicker"
              value={new Date()}
              mode="time"
              is24Hour={true}
              display="default"
              //@ts-ignore
              onChange={(_, d) => {
                setStart(moment(d));
                setStartPickerVisible(false);
              }}
            />
          )}
          {endPickerVisible && (
            <DateTimePicker
              minimumDate={end ? end.toDate() : new Date()}
              textColor={constants.white}
              testID="dateTimePicker"
              value={new Date()}
              mode="time"
              is24Hour={true}
              display="default"
              //@ts-ignore
              onChange={(_, d) => {
                setEnd(moment(d));
                setEndPickerVisible(false);
              }}
            />
          )}
        </View>
        <CategoryBottomSheet />
        <Button
          type="secondary"
          loading={loading}
          onPress={onFinish}
          containerStyle={styles.createButton}
        >
          <AppText style={styles.createButtonText}>Update Task</AppText>
        </Button>
      </View>
    </CustomSafeAreaView>
  );
};

export default CreateTask;
