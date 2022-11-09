import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SingUpPage';
import SignInPage from './pages/SignInPage';
import MainPage from './pages/MainPage';
import Loading from './pages/Loading';

function App() {
    return (
        <Router >
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/auth" element={<Loading/>} />
            </Routes>
        </Router>
    );
}

export default App;
