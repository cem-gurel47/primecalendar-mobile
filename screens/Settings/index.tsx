import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import AppText from '../../components/AppText';
import Header from '../../components/Headers/SettingsHeader';
// import { NotificationsContext } from '../../contexts/Notifications/context';
// import { ThemeContext } from '../../contexts/Theme/context';
import { AuthContext } from '../../contexts/Auth/context';
// import { Entypo } from '@expo/vector-icons';
import { normalize } from '../../utils/helpers/normalize';
// import { Ionicons } from '@expo/vector-icons';
import constants from '../../utils/constants';
// import { Switch } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

// interface SettingsItemProps {
//   label: string;
//   icon: React.ReactNode;
//   onPress: any;
//   switched: boolean;
// }

const BUTTON_SIZE = normalize(24);

const Settings = () => {
  //@ts-ignore
  const { user, setUser } = useContext(AuthContext);
  console.log(user);
  //@ts-ignore
  // const { notificationAccess, setNotificationAccess } =
  //   useContext(NotificationsContext);
  //@ts-ignore
  // const { theme, setTheme } = useContext(ThemeContext);

  // const toggleNotificationAccess = async () => {
  //   if (notificationAccess) {
  //     await AsyncStorage.setItem('notificationAccess', JSON.stringify(false));
  //     setNotificationAccess(false);
  //   } else {
  //     await AsyncStorage.setItem('notificationAccess', JSON.stringify(true));
  //     setNotificationAccess(true);
  //   }
  // };

  // const changeTheme = async () => {
  //   if (theme === 'dark') {
  //     await AsyncStorage.setItem('theme', 'light');
  //     setTheme('light');
  //   } else {
  //     await AsyncStorage.setItem('theme', 'dark');
  //     setTheme('dark');
  //   }
  // };

  const logout = async () => {
    await AsyncStorage.removeItem('user');
    setUser();
  };

  // const SettingsItem: React.FC<SettingsItemProps> = ({
  //   label,
  //   icon,
  //   onPress,
  //   switched,
  // }) => {
  //   return (
  //     <View style={styles.settingsItemContainer}>
  //       <View style={styles.settingsItemIconAndLabelContainer}>
  //         {icon}
  //         <AppText color="white">{label}</AppText>
  //       </View>
  //       <Switch value={switched} onChange={onPress} />
  //     </View>
  //   );
  // };

  return (
    <CustomSafeAreaView>
      <Header />
      <View style={styles.avatar}>
        <AppText
          style={styles.initials}
        >{`${user.first_name[0]}${user.last_name[0]}`}</AppText>
      </View>
      {/* <SettingsItem
        label="Notifications"
        icon={
          <Entypo
            style={styles.icon}
            name="notification"
            size={BUTTON_SIZE}
            color={constants.icon[2]}
          />
        }
        onPress={toggleNotificationAccess}
        switched={notificationAccess}
      /> */}
      {/* <SettingsItem
        label="Theme"
        icon={
          <Ionicons
            style={styles.icon}
            name="ios-color-palette"
            size={BUTTON_SIZE}
            color={constants.primary}
          />
        }
        onPress={changeTheme}
        switched={theme === 'dark'}
      /> */}
      <TouchableOpacity onPress={logout} style={styles.settingsItemContainer}>
        <View style={styles.settingsItemIconAndLabelContainer}>
          <AntDesign
            style={styles.icon}
            name="logout"
            size={BUTTON_SIZE}
            color={constants.secondary}
          />
          <AppText color="white">Logout</AppText>
        </View>
      </TouchableOpacity>
    </CustomSafeAreaView>
  );
};

export default Settings;
