import React, { useState } from 'react';
import useWebSocket from 'react-use-websocket';
import './App.css';

const WS_URL = 'ws://127.0.0.1:8000';

function App() {
  useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    }
  });

  return <div>Hello WebSockets!</div>;
}

/* When a user joins, I notify the
server that a new user has joined to edit the document. */
//function LoginSection({ onLogin }) {
  //const [username, setUsername] = useState('');

  /* When content changes, we send the
  current content of the editor to the server. */
  function handleHtmlChange(e) {
    // Placeholder code for sending HTML content
    console.log('HTML Content:', e.target.value);
  }

  return (
    <div>
      <textarea value={username} onChange={handleHtmlChange} />
    </div>
  );
}

export default App;
