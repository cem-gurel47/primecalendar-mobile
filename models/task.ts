interface Task {
  id: string;
  type: string;
  title: string;
  start: string;
  end: string;
  status: 'To do' | 'In Progress' | 'Done';
}

export default Task;
