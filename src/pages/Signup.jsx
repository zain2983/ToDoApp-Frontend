import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        if (!email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Perform signup logic here (e.g., API call)
        alert("Account created successfully!");
    };

    return (
        <div className='bg-stone-900 grid py-4 min-h-screen'>
            <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[500px] rounded-xl shadow-lg'>
                <h1 className='text-3xl font-bold text-center text-stone-900'>Sign Up</h1>

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

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='mt-4 p-4 bg-gray-200 rounded-lg outline-none text-lg'
                />

                <button
                    onClick={handleSignup}
                    className='mt-6 p-3 bg-blue-500 rounded-lg text-white font-medium text-lg'>
                    Sign Up
                </button>

                <p className='mt-4 text-center text-gray-600'>
                    Already have an account?{" "}
                    <a href="/login" className='text-blue-500 underline'>
                        Login
                    </a>
                </p>
            </div>
        </div>

    );
};

export default Signup;
