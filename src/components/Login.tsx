// UserLogin.tsx
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const UserLogin: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = (values: any) => {
        setLoading(true);
        // Simulate login request (replace with your actual login logic)
        setTimeout(() => {
            setLoading(false);
            console.log('Received values:', values);
            // Check login credentials and handle accordingly
            if (values.username === 'demo' && values.password === 'password') {
                message.success('Login successful');
            } else {
                message.error('Invalid username or password');
            }
        }, 1000);
    };

    return (
        <Card title="User Login" style={{ width: 300 }}>
            <Form
                name="normal_login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="#">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Log in
                    </Button>
                    Or <a href="#">register now!</a>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default UserLogin;
