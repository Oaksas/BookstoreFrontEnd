import React from 'react';
import { useLoginUserMutation } from '../services/usersApi';
import toast from 'react-simple-toasts';

const UserLogin: React.FC = () => {
    const [loginUser] = useLoginUserMutation();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;

        try {
            const result = await loginUser({ username, password });
            console.log(result)
            if (result?.error) {
                toast(result.error.data);
                return;
            }
            localStorage.setItem('TOKEN', JSON.stringify({ username, password }));

            toast('Login Successful');
        } catch (error) {
            toast('Login Failed');
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="container">
            <div className="wrapper">
                <div className="title">
                    <span>Login Form</span>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="row">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username" required name="username" />
                    </div>
                    <div className="row">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required name="password" />
                    </div>
                    <div className="row button">
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserLogin;
