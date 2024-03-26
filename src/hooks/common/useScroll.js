import { useEffect, useRef } from 'react';

const useScrollToBottom = (messages) => {
    const chatEndRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return { chatEndRef, scrollToBottom };
};

export default useScrollToBottom;
