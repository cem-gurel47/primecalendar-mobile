import React, { createContext } from 'react';

export const NotificationsContext = createContext({});

const NotificationsContextProvider = (props) => {
  return (
    <NotificationsContext.Provider {...props}>
      {props.children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsContextProvider;
