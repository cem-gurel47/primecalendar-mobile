import axios, { baseURL } from './axios';
import { ITaskCreate, ITaskUpdate } from '../models/task';

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
      return response.data;
    } catch (error) {
      console.error('getTasks', error);
      throw error;
    }
  }

  async createTask(task: ITaskCreate) {
    try {
      const response = await axios.post(`${endpoint}`, task);
      return response.data;
    } catch (error) {
      console.error('createTask', error);
      throw error;
    }
  }

  async updateTask(taskId: string, newTask: ITaskUpdate) {
    try {
      const response = await axios.patch(`${endpoint}update`, {
        id: { _id: taskId },
        newTask,
      });
      return response.data;
    } catch (error) {
      console.error('updateTask', error);
      throw error;
    }
  }

  async deleteTasks(taskIds: string[]) {
    try {
      const response = await axios.post(`${endpoint}delete`, {
        ids: taskIds,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('deleteTasks', error);
      throw error;
    }
  }
}

export default new TaskService();
