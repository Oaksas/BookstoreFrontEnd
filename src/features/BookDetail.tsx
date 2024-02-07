import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Layout, Row, Typography } from 'antd';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useGetBookByIdQuery } from '../services/bookStoreApi';
import { Loader } from '../components';
import { useCreateOrderMutation } from '../services/orderApi';
import toast from 'react-simple-toasts';
import { toastConfig } from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/dark.css'; // choose your theme
import { isAuthenticated } from '../utils';

toastConfig({ theme: 'dark' }); // configure global toast settings, like theme

const { Content } = Layout;

const BookDetail: React.FC = () => {
    const navigate = useNavigate();
    const { bookid } = useParams();
    const { data: book, isFetching, isError } = useGetBookByIdQuery(Number(bookid));
    const [createOrder] = useCreateOrderMutation();
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        if (!isAuthenticated() && mounted) {
            navigate('/login');
            setMounted(false);
        }
    }, [navigate, mounted]);
    if (isFetching) {
        return <Loader />;
    }
    if (isError) {
        return <Alert message="Error loading book" type="error" />;
    }

    const handleBuy = async () => {
        try {
            const result = await createOrder({
                bookId: 1,
                customerId: 1,
                quantity: 1,
            });

            if ('error' in result) {
                toast('Order Failed..check your balance and try again');
                return;
            } else {
                toast('Order Placed Successfully');
            }
        } catch (error) {
            toast('Order Failed..check your balance and try again');
        }
    };

    return (
        <div className='container'>
            {book && (
                <Content>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <img src='https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg' alt={book.title} style={{ width: '100%', height: 'auto' }} />
                        </Col>
                        <Col xs={24} sm={12} md={16} lg={18}>
                            <div>
                                <Typography.Title level={2}>
                                    {book.title}{' '}
                                    <Typography.Paragraph color="danger">
                                        {/* Genre: {book.tags.map((tag, index) => (
                                            <span key={index}>{tag}{index !== book.tags.length - 1 && ', '}</span>
                                        ))} */}
                                    </Typography.Paragraph>
                                </Typography.Title>                                <Typography.Title level={4}>{book.author}</Typography.Title>
                                <Typography.Title level={3}>{`$${book.price}`}</Typography.Title>
                                <Button type="primary" size="large" onClick={handleBuy}>
                                    Buy Now
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Content>
            )}
        </div >
    );
};

export default BookDetail;
