import React, { useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://127.0.0.1:5000");

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  socket.on("message", (msg) => {
    setMessages((prev) => [...prev, msg]);
  });

  const sendMessage = () => {
    socket.send(message);
    setMessage("");
  };

  return (
    <div>
      <h2>Real-Time Chat</h2>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
      <div>
        {messages.map((msg, index) => <p key={index}>{msg}</p>)}
      </div>
    </div>
  );
};

export default Chat;
