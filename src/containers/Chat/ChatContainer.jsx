import React from 'react';
import useChat from '../../hooks/socket/useChat';
import ChatInputCommon from '../../common/ChatInputCommon';
import ChatWindowCommon from '../../common/ChatWindowCommon';
import useScrollToBottom from '../../hooks/common/useScroll';
import { Container, Typography } from '@mui/material';

const ChatContainer = () => {
    const { messages, messageInput, username, setUsername, setMessageInput, sendMessage } = useChat();
    const { chatEndRef } = useScrollToBottom(messages);

    return (
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>실시간 채팅</Typography>

            {/* 채팅 목록 */}
            <ChatWindowCommon
                messages={messages}
                username={username}
                chatEndRef={chatEndRef}
            />

            {/* 채팅 입력 */}
            <ChatInputCommon
                username={username}
                messageInput={messageInput}
                setUsername={setUsername}
                setMessageInput={setMessageInput}
                sendMessage={sendMessage}
            />
        </Container>
    );
};

export default ChatContainer;
