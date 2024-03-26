import React from 'react';
import useChat from '../../hooks/socket/useChat';
import ChatWindowComponent from '../../components/Chat/ChatWindowComponent';
import ChatInputComponent from '../../components/Chat/ChatInputComponent';
import useScrollToBottom from '../../hooks/common/useScroll';
import { Box, Container, Typography } from '@mui/material';


const ChatContainer = () => {
    const { messages, messageInput, username, setUsername, setMessageInput, sendMessage } = useChat();
    const { chatEndRef } = useScrollToBottom(messages);

    return (
        <Container maxWidth="sm" style={{ marginTop: '50px' }}>
            <Typography variant="h4" align="center" gutterBottom>실시간 채팅</Typography>

            {/* 채팅 목록 */}
            <ChatWindowComponent
                messages={messages}
                username={username}
                chatEndRef={chatEndRef}
            />

            {/* 채팅 입력 */}
            <Box sx={{ mt: '10px' }}>
                <ChatInputComponent
                    username={username}
                    messageInput={messageInput}
                    setUsername={setUsername}
                    setMessageInput={setMessageInput}
                    sendMessage={sendMessage}
                />
            </Box>

        </Container>
    );
};

export default ChatContainer;
