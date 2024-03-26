import { useState, useEffect } from 'react';
import socket from '../../utils/socket';

const useChat = () => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        const message = {
            username: username,
            text: messageInput
        };
        socket.emit('message', message);
        setMessageInput('');
    };

    return { messages, messageInput, username, setUsername, setMessageInput, sendMessage };
};

export default useChat;
