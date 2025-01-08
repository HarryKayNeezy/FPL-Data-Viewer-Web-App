import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000'); 

const Chat = () => {
  const [messages, setMessages] = useState(() => {
    // retrieve persisted messages from localStorage
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  const [inputMessage, setInputMessage] = useState('');
  const [name, setName] = useState(() => {
    // retrieve saved name from localStorage or default to empty
    return localStorage.getItem('userName') || '';
  });
  const [isNameEntered, setIsNameEntered] = useState(!!name);

  useEffect(() => {
    // listen for msgs from server
    socket.on('chatMessage', (msg) => {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, msg];
        // persist messages to localStorage
        localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
        return updatedMessages;
      });
    });

    // cleanup the event listener on component unmount
    return () => {
      socket.off('chatMessage');
    };
  }, []);

  const sendMessage = () => {
    if (inputMessage.trim() && name.trim()) {
      const messageData = { user: name, text: inputMessage };
      // send the message along with the user's name to the server
      socket.emit('chatMessage', messageData);
      setInputMessage('');
    }
  };

  const handleNameSubmit = () => {
    if (name.trim()) {
      localStorage.setItem('userName', name);  // save the name to localStorage
      setIsNameEntered(true);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '300px', margin: '20px auto' }}>
      <h3>Chat</h3>

      {!isNameEntered ? (
        <div>
          <p>Please enter your name:</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            style={{ width: '70%' }}
          />
          <button onClick={handleNameSubmit} style={{ marginLeft: '5px' }}>Enter</button>
        </div>
      ) : (
        <div>
          <div style={{ height: '150px', overflowY: 'auto', border: '1px solid #ddd', padding: '5px' }}>
            {messages.map((msg, index) => (
              <p key={index}><strong>{msg.user}: </strong>{msg.text}</p>
            ))}
          </div>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message"
            style={{ width: '70%' }}
          />
          <button onClick={sendMessage} style={{ marginLeft: '5px' }}>Send</button>
        </div>
      )}
    </div>
  );
};

export default Chat;
