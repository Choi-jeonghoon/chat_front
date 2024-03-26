import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Button, styled } from '@mui/material';
import backgroundImg from '../assets/fr1.png';



const MainComponent = () => {
    return (
        <BackgroundImage>
            <Box>
                <TitleText variant="h4">
                    새로운 친구를 만나보러 떠나보자~!!
                </TitleText>
                <ButtonContainer>
                    <Link to="/Chat" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="secondary" style={{ marginRight: '10px' }}>
                            채팅방 입장
                        </Button>
                    </Link>
                    <Button variant="contained" color="secondary">
                        채팅방 생성
                    </Button>
                </ButtonContainer>
            </Box>
        </BackgroundImage>
    );
};

export default MainComponent;

// 배경 이미지 스타일
const BackgroundImage = styled('div')({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
});

// 제목 텍스트 스타일
const TitleText = styled(Typography)({
    textAlign: 'center',
    marginBottom: '20px',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
});

// 버튼 컨테이너 스타일
const ButtonContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
});