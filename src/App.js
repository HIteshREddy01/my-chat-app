import React, { useState } from 'react';
import './App.css';

function App() {
  const [roomCode, setRoomCode] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { user: username, text: message }]);
      setMessage('');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Chat Room</h1>
          <input
            type="text"
            placeholder="Enter room code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="chat-container">
          <div className="chat">
            {messages.map((msg, index) => (
              <div key={index} className={msg.user === username ? 'my-message' : 'other-message'}>
                <strong>{msg.user}</strong>: {msg.text}
              </div>
            ))}
          </div>
          <div className="message-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={handleMessageChange}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;