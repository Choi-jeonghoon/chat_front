import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const ChatInputCommon = ({ username, messageInput, setUsername, setMessageInput, sendMessage }) => {


    return (
        <Box sx={{ width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>

            <Box style={{ width: '20%', margin: '5px' }}>
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

            <Box sx={{ width: '70%', marginRight: '10px' }}>
                <TextField
                    multiline
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="메시지 입력"
                    fullWidth
                    variant="outlined"
                    size="small"
                    inputProps={{ style: { minHeight: '10px', width: '100%' } }}
                />
            </Box>
            <Box style={{ width: '10%' }}>
                <Button style={{ width: '100%', height: '40px' }} variant="contained" color="primary" onClick={sendMessage}>전송</Button>
            </Box>

        </Box >
    );
};

export default ChatInputCommon;
