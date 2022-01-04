import axios, { baseURL } from './axios';
import firebase from 'firebase';

const endpoint = `${baseURL}user/`;

class UserService {
  async signInWithEmailAndPassword(email: string, password: string) {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      return user;
    } catch (error) {
      console.log('signin error', error);
      return error;
    }
  }

  async createUserWithEmailAndPassword(email: string, password: string) {
    try {
      const newUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const response = await axios.post(`${endpoint}signin`, {
        firebaseUID: newUser.user?.uid,
      });
      return response;
    } catch (error) {
      console.log('signup error', error);
      return error;
    }
  }
}

export default new UserService();
