import React from 'react';
import TaskModel from '../../models/task';
import { TouchableOpacity, View } from 'react-native';
import AppText from '../../components/AppText';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
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

const Task: React.FC<Props> = ({
  item,
  index,
  isDeleting,
  selectedTasks,
  setSelectedTasks,
}) => {
  const navigation = useNavigation();
  const iconSize = normalize(20);
  const checked = selectedTasks.includes(item._id);
  //@ts-ignore

  const icons = {
    Sports: (
      <MaterialCommunityIcons
        name="weight-lifter"
        color="#fff"
        size={iconSize}
      />
    ),
    Study: (
      <MaterialCommunityIcons
        name="chair-school"
        color="#fff"
        size={iconSize}
      />
    ),
    Leisure: <FontAwesome name="coffee" color="#fff" size={iconSize} />,
    Other: (
      <MaterialCommunityIcons
        name="lock-question"
        color="#fff"
        size={iconSize}
      />
    ),
  };

  const checkBoxStyles = {
    size: normalize(24),
    color: '#fff',
    style: styles.checkBoxIcon,
  };

  const onCheckBoxPress = () => {
    if (checked) {
      const filteredArray = selectedTasks.filter(
        (taskId) => taskId !== item._id,
      );
      setSelectedTasks(filteredArray);
    } else {
      setSelectedTasks([...selectedTasks, item._id]);
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
        <AppText key={index} style={styles.taskName}>
          {item.name}
        </AppText>
        <View>
          <AppText type="Muli_500Medium_Italic">
            {item.repeatingDays &&
              item.repeatingDays.length > 0 &&
              `*Repeats every ${item.repeatingDays.map((day) => day)}`}
          </AppText>
        </View>
        <View style={styles.hourIconAndHourTextContainer}>
          <AntDesign
            name="clockcircleo"
            size={normalize(14)}
            color="#fff"
            style={styles.iconStyles}
          />
          <AppText style={styles.mediumText}>
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
          <Feather name="arrow-right-circle" color="#fff" size={iconSize} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Task;
