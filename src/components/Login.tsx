import React from 'react';
import { useLoginUserMutation } from '../services/usersApi';
import toast from 'react-simple-toasts';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';

const UserLogin: React.FC = () => {
    const [loginUser] = useLoginUserMutation();
    const navigate = useNavigate(); // Step 1

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;

        try {
            const result = await loginUser({ username, password });
            if ('error' in result) {
                toast((result.error as any)?.data);
                return;
            }

            const { data } = result;

            if (!data || !data.points) {
                toast('Invalid response from server');
                return;
            }

            localStorage.setItem('TOKEN', JSON.stringify({ username, points: data.points, id: data.id }));
            toast('Login Successful');


            window.location.replace('/')

        } catch (error) {
            toast('Login Failed');
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
                        <UserOutlined className='loginIcons' />
                        <input type="text" placeholder="Username" required name="username" />
                    </div>
                    <div className="row">
                        <KeyOutlined className='loginIcons' />
                        <input type="password" placeholder="Password" required name="password" />
                    </div>
                    <div className="row button">
                        <input type="submit" value="Login" />
                    </div>

                    <div className=''>
                        Don't have an account ? <Link to='/signup'>Signup</Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UserLogin;
