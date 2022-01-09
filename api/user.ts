import axios, { baseURL } from './axios';

const endpoint = `${baseURL}user/`;

class UserService {
  async login(email: string, password: string) {
    try {
      const response = await axios.post(`${endpoint}login`, {
        email,
        password,
      });

      return response.status === 200 && response.data;
    } catch (error) {
      console.log('signin error', error);
      throw error;
    }
  }

  async register(
    first_name: string,
    last_name: string,
    email: string,
    password: string,
  ) {
    try {
      const response = await axios.post(`${endpoint}register`, {
        first_name,
        last_name,
        email,
        password,
      });
      return response.status === 201 && response.data;
    } catch (error) {
      console.log('signup error', error);
      throw error;
    }
  }
}

export default new UserService();
