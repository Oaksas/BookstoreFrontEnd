import React from 'react';
import { useCreateUserMutation } from '../services/usersApi';
import toast from 'react-simple-toasts';
import { useNavigate } from 'react-router-dom';

const UserSignup: React.FC = () => {
    const [signupUser] = useCreateUserMutation();
    const navigate = useNavigate(); // Step 1

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;

        try {
            const result = await signupUser({ username, password });

            if ('error' in result) {
                toast(result.error.data);
                return;
            }

            const { data } = result;

            if (!data || !data.points) {
                toast('Invalid response from server');
                return;
            }

            toast('Signup Successful');


            navigate('/login'); // Step 3

        } catch (error) {
            toast('Signup Failed');
            console.error('Signup failed:', error);
        }
    };


    return (
        <div className="container-login">
            <div className="wrapper">
                <div className="title">
                    <span>Signup </span>
                </div>
                <form onSubmit={handleSignup}>
                    <div className="row">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username" required name="username" />
                    </div>
                    <div className="row">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required name="password" />
                    </div>
                    <div className="row button">
                        <input type="submit" value="Signup" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserSignup;
