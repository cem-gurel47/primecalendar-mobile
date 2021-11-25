import React, { createContext } from 'react';
export const ThemeContext = createContext({});

const ThemeContextProvider = (props) => {
  return (
    <ThemeContext.Provider {...props}>{props.children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
