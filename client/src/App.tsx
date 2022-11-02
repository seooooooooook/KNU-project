import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SingUpPage';
import SignInPage from './pages/SignInPage';
import MainPage from './pages/MainPage';

function App() {
    return (
        <Router basename="/main">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/signin" element={<SignInPage />} />
            </Routes>
        </Router>
    );
}

export default App;
