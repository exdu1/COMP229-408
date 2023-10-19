/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  const createArray = (length) => {
    return Array.from({ length }, (_, index) => index);
  };

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

const Star = ({ selected = false, onSelect }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);



[
{
This class component does the same thing as our function component with noticeably more code. 
Additionally, it introduces more confusion thorough the use of the this keyword and function 
binding.
As of today, this code still works. We are no longer covering class components in this book 
because they are no longer needed. Function components and hooks are the future of React, and 
we are not looking back. There could come a day where class components are officially 
deprecated, and this code will no longer be supported.
State in Component Trees
It is not a great idea to use state in every single component. Having state data distributed 
throughout too many of your components will make it harder to track down bugs and make 
changes within your application. This occurs because it is hard to keep track of where the state 
values live within your component tree. It is easier to understand your application’s state, or state 
for a specific feature, if we were to manage it from one location. There are several approaches to 
this methodology and the first one we will analyze is storing state at the root of your component 
tree and passing it down to child components via props.
Let’s build a small application that can be used to save a list of colors. We’ll call the app 
the Color Organizer, and it will allow users to associate a list of colors with a custom title and 
rating. To get started a sample dataset may look like the following:}, 
{
}, 
{
"id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
"title":  "ocean at dusk",
"color":  "#00c4e2",
"rating":  5
"id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
"title":  "lawn",
"color":  "#26ac56",
"rating":  3
"id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
"title":  "bright red",
"color":  "#ff0000",
"rating":  0
}
]