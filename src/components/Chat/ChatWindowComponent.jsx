import React from 'react';
import { Box, Typography } from '@mui/material';

const ChatWindowCommon = ({ messages, username, chatEndRef }) => {

    return (
        <Box
            sx={{
                width: '80%',
                minHeight: '400px',
                maxHeight: '401px',
                marginBottom: '20px',
                margin: 'auto',
                padding: '10px',
                overflowY: 'auto',
                borderRadius: '10px',
                backgroundColor: 'none',
                border: '5px solid grey',
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
                        // 개행 문자를 <br> 태그로 변환하여 표시하기 위해서 작성했다.
                        dangerouslySetInnerHTML={{ __html: message.text.replace(/\n/g, '<br>') }}
                    />
                    <Typography variant="caption" sx={{ marginTop: '5px', color: '#666' }}>
                        {message.username}
                    </Typography>
                </div>
            ))}
            <div ref={chatEndRef}></div>
        </Box>
    );
};

export default ChatWindowCommon;
