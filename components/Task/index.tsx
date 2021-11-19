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
import Feather from '@expo/vector-icons/Feather';

interface Props {
  item: TaskModel;
  index: any;
  isDeleting: boolean;
  selectedTasks: string[];
  setSelectedTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

//TODO change background color to orange?
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
    Sports: (
      <MaterialCommunityIcons
        name="weight-lifter"
        color={constants.secondary}
        size={iconSize}
      />
    ),
    Study: (
      <MaterialCommunityIcons
        name="chair-school"
        color={constants.primary}
        size={iconSize}
      />
    ),
    Leisure: (
      <FontAwesome
        name="coffee"
        color={constants.mediumPriority}
        size={iconSize}
      />
    ),
    Other: (
      <MaterialCommunityIcons
        name="lock-question"
        color={constants.descriptionColor}
        size={iconSize}
      />
    ),
  };

  const checkBoxStyles = {
    size: 24,
    color: constants.white,
    style: styles.checkBoxIcon,
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
      onPress={() => {
        //@ts-ignore
        navigation.navigate('TaskDetails', {
          task: item,
        });
      }}
    >
      <View style={styles.leftSide}>
        {/* @ts-ignore */}
        <View style={styles.iconStyles}>{icons[item.category]}</View>
        <View>
          <AppText key={index} style={{ color: constants.black }} color="white">
            {item.title}
          </AppText>
          <AppText color="white">
            {item.start}-{item.end}
          </AppText>
        </View>
      </View>

      <View style={styles.rightSide}>
        {isDeleting ? (
          <CheckBox
            checked={checked}
            checkedIcon={
              <FontAwesome name="check-circle-o" {...checkBoxStyles} />
            }
            uncheckedIcon={
              <FontAwesome name="circle-thin" {...checkBoxStyles} />
            }
            onPress={onCheckBoxPress}
          />
        ) : (
          // <View style={styles.statusContainer}>
          //   <AppText type="Muli_700Bold" color="white">
          //     {item.status}
          //   </AppText>
          // </View>
          <Feather
            name="arrow-right-circle"
            color={constants.white}
            size={30}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Task;
