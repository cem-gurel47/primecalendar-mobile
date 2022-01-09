import React, { useState, useContext } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import styles from './styles';
import Logo from '../../assets/PrimeCalendarLogo.png';
// import GoogleLogo from '../../assets/google.png';
import { AuthContext } from '../../contexts/Auth/context';
import { Tab } from 'react-native-elements';
import LoginForm from '../../components/Auth/Login';
import RegisterForm from '../../components/Auth/Register';

interface Props {
  navigation: any;
  route: any;
}

const SignIn: React.FC<Props> = () => {
  // @ts-ignore
  const { user } = useContext(AuthContext);
  const [index, setIndex] = useState(0);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return (
    <CustomSafeAreaView>
      {!user && (
        <ScrollView contentContainerStyle={styles.container}>
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={keyboardVerticalOffset}
          >
            <View style={styles.innerContainer}>
              <Image source={Logo} style={styles.logo} />
              {/* <Text style={styles.title}>Welcome to Prime Calendar</Text> */}
            </View>
            <Tab
              value={index}
              onChange={(e) => {
                setIndex(e);
              }}
              indicatorStyle={styles.indicatorStyle}
              variant="default"
            >
              <Tab.Item
                title="Login"
                titleStyle={styles.tabTitle}
                icon={{ name: 'login', type: 'antdesign', color: 'white' }}
              />
              <Tab.Item
                title="Register"
                titleStyle={styles.tabTitle}
                icon={{
                  name: 'addusergroup',
                  type: 'antdesign',
                  color: 'white',
                }}
              />
            </Tab>

            {index === 0 ? <LoginForm /> : <RegisterForm />}
          </KeyboardAvoidingView>
        </ScrollView>
      )}
    </CustomSafeAreaView>
  );
};

export default SignIn;
