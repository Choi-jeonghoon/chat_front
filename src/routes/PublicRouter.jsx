import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ChatPage from '../pages/ChatPage';

const PublicRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/Main" element={<MainPage />} />
                <Route exact path="/Chat" element={<ChatPage />} />
            </Routes>
        </Router>
    );
};

export default PublicRouter;
