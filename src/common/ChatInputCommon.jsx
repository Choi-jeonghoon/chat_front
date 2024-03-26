import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const ChatInputCommon = ({ username, messageInput, setUsername, setMessageInput, sendMessage }) => {
    return (
        <Box style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="이름"
                fullWidth
                variant="outlined"
                size="small"
                style={{ marginRight: '10px', width: '30%' }}
            />
            <TextField
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="메시지 입력"
                fullWidth
                variant="outlined"
                size="small"
                style={{ marginRight: '10px' }}
            />
            <Button variant="contained" color="primary" onClick={sendMessage}>전송</Button>
        </Box>
    );
};

export default ChatInputCommon;
