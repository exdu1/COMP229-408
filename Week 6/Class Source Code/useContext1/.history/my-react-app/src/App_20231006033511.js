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
export const themeContext = createContext('light');
//import { useContext } from 'react';
import { ThemeContext } from './App.js';

export default function Button({ children }) {
  const theme = useContext(ThemeContext);
  // ...
}

<ThemeContext.Provider value={theme}>
  {children}
</ThemeContext.Provider>
//export default Counter;
