import axios from 'axios';
import { auth } from '../firebase';

// Add a request interceptor
const AxiosInstance = axios.create();

AxiosInstance.interceptors.request.use(
  async (config) => {
    const idToken = await auth.currentUser?.getIdToken();
    config.headers['Content-Type'] = 'application/json';
    if (idToken) {
      config.headers.authorization = idToken;
    }
    return config;
  },
  function (error) {
    console.log('error on creating axios instance ', error);
  },
);

export default AxiosInstance;

export const baseURL = 'http://localhost:4000/';
