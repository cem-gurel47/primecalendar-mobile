import React from 'react';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import AccountHeader from '../../components/Headers/AccountHeader';
import { FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import AppText from '../../components/AppText';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import constants from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';

interface MenuTabProps {
  tabName: string;
  pageName: string;
  icon: React.ReactElement;
  id: number;
}

interface RenderItemProps {
  item: MenuTabProps;
}
const ICON_SIZE = 40;
const Account = () => {
  const navigation = useNavigation();
  const MenuData: MenuTabProps[] = [
    {
      tabName: 'Analysis & Reviews',
      pageName: 'AnalysisAndReviews',
      id: 0,
      icon: <Ionicons name="bar-chart-outline" color={constants.primary} />,
    },
    {
      tabName: 'Settings',
      pageName: 'Settings',
      id: 1,
      icon: <MaterialIcons name="account-circle" color={constants.icon[1]} />,
    },
    {
      tabName: 'Theme',
      pageName: 'Theme',
      id: 2,
      icon: (
        <Ionicons
          name="color-palette-outline"
          color={constants.mediumPriority}
        />
      ),
    },
    {
      tabName: 'General',
      pageName: 'General',
      id: 3,
      icon: <Ionicons name="settings-outline" color={constants.highPriority} />,
    },
    {
      tabName: 'Sounds & Notifications',
      pageName: 'SoundsAndNotifications',
      id: 4,
      icon: (
        <Ionicons
          name="notifications-circle-outline"
          color={constants.gradient}
        />
      ),
    },
  ];

  const renderItem: React.FC<RenderItemProps> = ({ item }) => {
    const Icon = React.cloneElement(item.icon, {
      size: ICON_SIZE,
    });
    return (
      <TouchableOpacity
        style={styles.menuTab}
        //@ts-ignore
        onPress={() => navigation.navigate(item.pageName)}
      >
        {Icon}
        <AppText color="white" style={styles.tabName}>
          {item.tabName}
        </AppText>
      </TouchableOpacity>
    );
  };

  return (
    <CustomSafeAreaView>
      <AccountHeader />
      <FlatList
        data={MenuData}
        renderItem={renderItem}
        style={styles.flatList}
      />
    </CustomSafeAreaView>
  );
};

export default Account;
