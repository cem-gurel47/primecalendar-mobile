import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const AxiosInstance = axios.create();

AxiosInstance.interceptors.request.use(
  async (config) => {
    const user = await AsyncStorage.getItem('user');
    config.headers['Content-Type'] = 'application/json';
    if (user) {
      const parsedUser = JSON.parse(user);
      config.headers['x-access-token'] = parsedUser.token;
    }

    return config;
  },
  function (error) {
    console.log('error on creating axios instance ', error);
  },
);

export default AxiosInstance;

export const baseURL = 'http://localhost:4000/';
