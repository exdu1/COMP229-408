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

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleIncrement}>Click me</button>
    </div>
  );
}

export default Use;
