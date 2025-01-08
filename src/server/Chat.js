import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    useEffect(() => {
        //listening for msgs on the server
        socket.on('chatMessage', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.off('chatMessage');
        };
    },[]);

    const sendMessage = () => {
        if(inputMessage.trim()){
            socket.emit('chatMessage', inputMessage);
            setInputMessage('');
        }
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', width: '300px', margin: '20px auto' }}>
      <h3>Chat</h3>
      <div style={{ height: '150px', overflowY: 'auto', border: '1px solid #ddd', padding: '5px' }}>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Type a message"
        style={{ width: '70%' }}
      />
      <button onClick={sendMessage} style={{ width: '25%', marginLeft: '5px' }}>Send</button>
    </div>
    );
};

export default Chat;