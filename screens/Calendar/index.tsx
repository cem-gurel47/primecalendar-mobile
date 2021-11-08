import React, { useState } from 'react';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import Header from '../../components/Headers/CreateTaskHeader';
import { TextInput, View, ViewProps } from 'react-native';
import styles from './styles';
import constants from '../../utils/constants';
import CalendarModal from '../../components/Modals/CalendarModal';
import moment from 'moment';
import AppText from '../../components/AppText';
import Button from '../../components/Button';
import { Picker } from '@react-native-picker/picker';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface Props extends ViewProps {
  taskDetail: string;
  component: React.ReactNode;
}

const CreateTask = () => {
  const [taskName, setTaskName] = useState('');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Sports');
  const iconSize = 40;

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
      label: 'other',
      icon: (
        <MaterialCommunityIcons
          name="lock-question"
          color={constants.descriptionColor}
          size={iconSize}
        />
      ),
    },
  ];

  const TaskDetail: React.FC<Props> = (props) => {
    const { taskDetail, component, ...rest } = props;
    return (
      <View style={styles.taskDetailContainer} {...rest}>
        <View>
          <AppText style={styles.text} color="white">
            {taskDetail}
          </AppText>
        </View>
        <View>{component}</View>
      </View>
    );
  };

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <Header />
        <TextInput
          value={taskName}
          onChangeText={setTaskName}
          keyboardType="default"
          style={styles.input}
          placeholder="Task name"
          placeholderTextColor={constants.textSecondaryColor}
        />
        <TaskDetail
          taskDetail={`Date : ${moment(date).format('MMMM D')}`}
          component={
            <Button
              containerStyle={styles.modalButton}
              textStyle={styles.text}
              type="secondary"
              onPress={() => setDateModalVisible(true)}
            >
              Change date
            </Button>
          }
        />
        <TaskDetail
          taskDetail="Category :"
          component={
            <Picker
              selectedValue={selectedCategory}
              onValueChange={(value) => setSelectedCategory(value)}
              style={styles.picker}
              itemStyle={{ color: constants.white }}
            >
              {categories.map(({ label }) => (
                <Picker.Item label={label} key={label} value={label} />
              ))}
            </Picker>
          }
        />
        <CalendarModal
          modalVisible={dateModalVisible}
          setModalVisible={setDateModalVisible}
          date={date}
          setDate={setDate}
        />
      </View>
    </CustomSafeAreaView>
  );
};

export default CreateTask;
