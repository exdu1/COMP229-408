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
function LoginSection({ onLogin }) {
  const [username, setUsername] = useState('');
  const { sendJsonMessage } = useWebSocket(WS_URL, {
    share: true,
    filter: () => false
  });

  function logInUser() {
    if (!username.trim()) {
      return;
    }
    onLogin && onLogin(username); // Triggers sendJsonMessage in App
  }

  /* When content changes, we send the
  current content of the editor to the server. */
  function handleHtmlChange(e) {
    sendJsonMessage({
      type: 'contentchange',
      content: e.target.value
    });
  }

  return (
    <DefaultEditor value={html} onChange={handleHtmlChange} />
  );
}

export default App;
