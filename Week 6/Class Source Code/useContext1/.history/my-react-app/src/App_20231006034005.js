//import React from 'react';
//import ReactDOM from 'react-dom';

// This is a functional component
//const Welcome = () => {
  //return <h1>Hello World!</h1>;
//}

//ReactDOM.render(
  //<Welcome />,  // Use <Welcome /> instead of <welcome>
  //document.getElementById("root")
//);
//import ThemeContext from 'React';
import React, { useContext } from 'react';
/import { createContext } from 'react';

export const ThemeContext = createContext('light');

export default function Button({ children }) {
  const theme = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}
