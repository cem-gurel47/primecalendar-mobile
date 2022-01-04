import axios, { baseURL } from './axios';
import { ITaskCreate } from '../models/task';

const endpoint = `${baseURL}task/`;

class TaskService {
  async getTasks(date: string, day: string, firebaseUID: string) {
    try {
      const response = await axios.get(`${endpoint}date`, {
        params: {
          date,
          day,
          firebaseUID,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log('getTasks', error);
      return error;
    }
  }

  async createTask(task: ITaskCreate) {
    try {
      const response = await axios.post(`${endpoint}`, task);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log('createTask', error);
      return error;
    }
  }
}

export default new TaskService();
