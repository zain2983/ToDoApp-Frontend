import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email && password) {
            // Perform login logic here (e.g., API call)
            onLogin(); // Redirect or trigger post-login actions
        } else {
            alert("Please enter both email and password.");
        }
    };

    return (
        <div className='bg-stone-900 grid py-4 min-h-screen'>
            <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[400px] rounded-xl shadow-lg'>
                <h1 className='text-3xl font-bold text-center text-stone-900'>Login</h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='mt-5 p-4 bg-gray-200 rounded-lg outline-none text-lg'
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='mt-4 p-4 bg-gray-200 rounded-lg outline-none text-lg'
                />

                <button
                    onClick={handleLogin}
                    className='mt-6 p-3 bg-blue-500 rounded-lg text-white font-medium text-lg'>
                    Login
                </button>

                <p className='mt-4 text-center text-gray-600'>
                    Don't have an account?{" "}
                    <a href="/signup" className='text-blue-500 underline'>
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
