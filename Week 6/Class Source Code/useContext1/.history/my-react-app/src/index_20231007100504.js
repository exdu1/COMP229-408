/*import React from 'react';
import ReactDOM from 'react-dom/client';

//import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  />
  
  </React.StrictMode>
);
*/

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Component3 from './Components/Component3'
import ComponentC from './Components/ComponentC'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App Component3={ Component3} Component3 />
  </React.StrictMode>
);


