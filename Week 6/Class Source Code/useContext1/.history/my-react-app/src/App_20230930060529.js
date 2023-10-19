import React from 'react';
import ReactDOM from 'react-dom';

// This is a functional component
const Welcome = () => {
  return <h1>Hello World!</h1>;
}

ReactDOM.render(
  <Welcome />,  // Use <Welcome /> instead of <welcome>
  document.getElementById("root")
);

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

export default App;
