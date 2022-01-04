interface Task {
  _id: string;
  name: string;
  date: Date;
  start: string;
  end: string;
  repeats: boolean;
  repeatingDays?: string[];
  category: string;
  firebaseUID: string;
}

interface ITaskCreate {
  firebaseUID: string;
  category: string;
  name: string;
  date: string;
  start: string;
  end: string;
  repeats: boolean;
  repeatingDays?: string[];
}
export { ITaskCreate };

export default Task;
