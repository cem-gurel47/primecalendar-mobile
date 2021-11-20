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
import { normalize } from '../../utils/helpers/normalize';
import { AntDesign } from '@expo/vector-icons';

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
  const iconSize = normalize(20);
  const checked = selectedTasks.includes(item.id);

  const icons = {
    Sports: (
      <MaterialCommunityIcons
        name="weight-lifter"
        color={constants.white}
        size={iconSize}
      />
    ),
    Study: (
      <MaterialCommunityIcons
        name="chair-school"
        color={constants.white}
        size={iconSize}
      />
    ),
    Leisure: (
      <FontAwesome name="coffee" color={constants.white} size={iconSize} />
    ),
    Other: (
      <MaterialCommunityIcons
        name="lock-question"
        color={constants.white}
        size={iconSize}
      />
    ),
  };

  const checkBoxStyles = {
    size: normalize(24),
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
      //@ts-ignore
      style={styles.taskContainer(item.category)}
      onPress={() => {
        //@ts-ignore
        navigation.navigate('TaskDetails', {
          task: item,
        });
      }}
    >
      <View style={styles.leftSide}>
        <AppText key={index} style={styles.taskName} color="white">
          {item.title}
        </AppText>
        <View>
          <AppText type="Muli_500Medium_Italic" color="white">
            {item.repeatingDays &&
              `*Repeats every ${item.repeatingDays.map((day) => day)}`}
          </AppText>
        </View>
        <View style={styles.hourIconAndHourTextContainer}>
          <AntDesign
            name="clockcircleo"
            size={normalize(14)}
            color={constants.white}
            style={styles.iconStyles}
          />
          <AppText color="white" style={styles.mediumText}>
            {item.start}-{item.end}
          </AppText>
        </View>
      </View>
      {/* @ts-ignore */}
      <View style={styles.rightSide(isDeleting)}>
        {/* @ts-ignore */}
        {!isDeleting && <View>{icons[item.category]}</View>}
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
            size={iconSize}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Task;
