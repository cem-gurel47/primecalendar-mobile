interface Task {
  _id: string;
  name: string;
  date: Date;
  start: string;
  end: string;
  repeats: boolean;
  repeatingDays?: string[];
  category: string;
}

interface ITaskCreate {
  category: string;
  name: string;
  date: string;
  start: string;
  end: string;
  repeats: boolean;
  repeatingDays?: string[];
}

interface ITaskUpdate {
  category: string;
  name: string;
  date: string;
  start: string;
  end: string;
  repeats: boolean;
  repeatingDays?: string[];
}
export { ITaskCreate, ITaskUpdate };

export default Task;
