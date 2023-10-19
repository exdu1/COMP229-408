import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

// This is a functional component
//const Welcome = () => {
  //return <h1>Hello World!</h1>;
//}

//ReactDOM.render(
  //<Welcome />,  // Use <Welcome /> instead of <welcome>
  //document.getElementById("root")
//);
function use{
const [count, setCount] = useState(0);
setCount(count + 1);
<p>You clicked {count} times</p>
}

export default setCount;