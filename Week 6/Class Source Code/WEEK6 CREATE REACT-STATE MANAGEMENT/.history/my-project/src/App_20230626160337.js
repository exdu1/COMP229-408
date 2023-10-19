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
/*import React, { useState } from "react";
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
);*/

/*import React,  {  useState }  from "react";
import colorData from "./color-data.json";
import ColorList from "./components/ColorList.js";
export default function App()  {
const [colors]  = useState(colorData); 
return <ColorList colors={colors}  />;
}*/

import React,  {  useState }  from "react";
import colorData from "./color-data.json";
import ColorList from "./components/ColorList.js";
export default function App()  {
const [colors,  setColors]  = useState(colorData); 
return (
<ColorList
colors={colors} 
onRemoveColor={id => {
const newColors = colors.filter(color => color.id !== id); 
setColors(newColors);
}}
/>
); 
}

