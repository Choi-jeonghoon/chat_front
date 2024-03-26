import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const ChatInputCommon = ({ username, messageInput, setUsername, setMessageInput, sendMessage }) => {


    return (
        <Box style={{ display: 'flex', alignItems: 'flex-start' }}>
            <Box style={{ width: '40%', margin: '5px' }}>
                <TextField
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="이름"
                    fullWidth
                    variant="outlined"
                    size="small"
                    style={{ width: 'auto' }}
                />
            </Box>
            <Box style={{ width: '100%', margin: '5px' }}>
                <TextField
                    multiline
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="메시지 입력"
                    fullWidth
                    variant="outlined"
                    size="small"
                    inputProps={{ style: { minHeight: '10px' } }}
                />
            </Box>
            <Box style={{ width: '20%', margin: '5px' }}>
                <Button style={{ width: '100%' }} variant="contained" color="primary" onClick={sendMessage}>전송</Button>
            </Box>
        </Box >
    );
};

export default ChatInputCommon;
