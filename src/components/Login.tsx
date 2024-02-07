import React from 'react';
import { useLoginUserMutation } from '../services/usersApi';
import toast from 'react-simple-toasts';
import { useNavigate } from 'react-router-dom';

const UserLogin: React.FC = () => {
    const [loginUser] = useLoginUserMutation();
    const navigate = useNavigate(); // Step 1

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;

        try {
            const result = await loginUser({ username, password });

            if (result?.error) {
                toast(result.error.data);
                return;
            }

            const { data } = result;

            if (!data || !data.points) {
                toast('Invalid response from server');
                return;
            }

            localStorage.setItem('TOKEN', JSON.stringify({ username, points: data.points }));
            toast('Login Successful');


            navigate('/'); // Step 3

        } catch (error) {
            toast('Login Failed');
            console.error('Login failed:', error);
        }
    };


    return (
        <div className="container-login">
            <div className="wrapper">
                <div className="title">
                    <span>Login </span>
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
