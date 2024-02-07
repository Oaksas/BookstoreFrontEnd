import React, { useEffect, useState } from 'react';
import { useGetAllOrdersQuery } from '../services/usersApi';
import { Alert, Col, Divider, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import { Loader } from '../components';
import BookCard from '../components/Cards/BookCard';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils';

const GetMyOrders: React.FC = () => {
    const navigate = useNavigate();
    const [mounted, setMounted] = useState(true);

    const { data: books, isFetching, isError } = useGetAllOrdersQuery(1);

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
        return <Alert message="Error loading books" type="error" />;
    }


    return (
        <>
            <Divider orientation="left">
                <Title>My Orders</Title>
            </Divider>
            <Row gutter={[32, 32]}>
                {books?.map((book: any) => (
                    <Col key={book.id} xs={24} sm={12} md={8}>
                        <BookCard book={book.Book} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default GetMyOrders;
