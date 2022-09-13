import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SingUpPage';
import SignInPage from './pages/SignInPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<SignUpPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/signin' element={<SignInPage />} />
            </Routes>
        </Router>
    );
}


export default App;
