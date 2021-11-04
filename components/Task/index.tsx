import React from 'react';
import TaskModel from '../../models/task';
import { TouchableOpacity, View } from 'react-native';
import AppText from '../../components/AppText';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import constants from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { CheckBox } from 'react-native-elements';
// import Feather from '@expo/vector-icons/Feather';

interface Props {
  item: TaskModel;
  index: any;
  isDeleting: boolean;
  selectedTasks: string[];
  setSelectedTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

const Task: React.FC<Props> = ({
  item,
  index,
  isDeleting,
  selectedTasks,
  setSelectedTasks,
}) => {
  const navigation = useNavigation();
  const iconSize = 30;
  const checked = selectedTasks.includes(item.id);

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

  const onCheckBoxPress = () => {
    if (checked) {
      const filteredArray = selectedTasks.filter(
        (taskId) => taskId !== item.id,
      );
      setSelectedTasks(filteredArray);
    } else {
      setSelectedTasks([...selectedTasks, item.id]);
    }
  };

  return (
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
        <View style={styles.iconStyles}>{icons[item.type]}</View>
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
        {isDeleting ? (
          <CheckBox
            style={styles.checkBox}
            checked={checked}
            onPress={onCheckBoxPress}
          />
        ) : (
          <View style={styles.statusContainer}>
            <AppText type="Muli_700Bold" color="white">
              {item.status}
            </AppText>
          </View>
        )}
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
};

export default Task;
