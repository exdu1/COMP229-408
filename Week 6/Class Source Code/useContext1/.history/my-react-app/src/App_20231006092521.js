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
import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './features/todos/todosSlice'
import userReducer from './features/user/userSlice'

export default configureStore({
  reducer: {
    todo: todosReducer,
    user: userReducer
  },
})