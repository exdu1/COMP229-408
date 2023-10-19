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

import React, { useState } from 'react';

function Use() {
  const [state, dispatch] = useReducer(reducerFunc, 0);
  dispatch({ type: 'INCREMENT' })

  function reducerFunc(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case 'RESET':
        return 0;
      case 'SET':
        return action.val;
    }
  }
}

export default Use;
