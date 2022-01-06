import React, { createContext } from 'react';
export const TaskContext = createContext({});

const TaskContextProvider = (props) => {
  return (
    <TaskContext.Provider {...props}>{props.children}</TaskContext.Provider>
  );
};

export default TaskContextProvider;
