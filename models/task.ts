interface Task {
  id: string;
  category: string;
  title: string;
  date: Date;
  start: string;
  end: string;
  reminder: number;
  repeats: boolean;
  repeatingDays?: string[];
}

export default Task;
