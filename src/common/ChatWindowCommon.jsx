import React from 'react';
import { Box, Typography } from '@mui/material';

const ChatWindowCommon = ({ messages, username }) => {
    return (
        <Box
            sx={{
                minHeight: '400px',
                marginBottom: '20px',
                padding: '10px',
                overflowY: 'auto',
                borderRadius: '10px',
                backgroundColor: '#f9f9f9',
                border: '2px solid #ccc',
                boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
            }}
        >
            {messages.map((message, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: message.username === username ? 'flex-end' : 'flex-start',
                        marginBottom: '10px',
                    }}
                >
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{
                            padding: '10px',
                            borderRadius: '10px',
                            backgroundColor: message.username === username ? '#e3f2fd' : '#f5f5f5',
                            maxWidth: '70%',
                            wordWrap: 'break-word',
                        }}
                    >
                        {message.text}
                    </Typography>
                    <Typography variant="caption" sx={{ marginTop: '5px', color: '#666' }}>
                        {message.username}
                    </Typography>
                </div>
            ))}
        </Box>
    );
};

export default ChatWindowCommon;
