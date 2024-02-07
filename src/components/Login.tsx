import React from 'react';
import { Button, Checkbox, Form, Input, Typography } from 'antd';

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const UserLogin: React.FC = () => (
    <>
        <div className="container">
            <div className="wrapper">
                <div className="title"><span>Login Form</span></div>
                <form action="#">
                    <div className="row">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Email or Phone" required />
                    </div>
                    <div className="row">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="row button">
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    </>

);

export default UserLogin;
