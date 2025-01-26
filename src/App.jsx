import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Todo from './pages/Todo';

const App = () => {
    const handleLogin = () => {
        // Redirect to the Todo page or perform actions post-login
        console.log("Logged in successfully!");
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/todo" element={<Todo />} />
            </Routes>
        </Router>
    );
};

export default App;
