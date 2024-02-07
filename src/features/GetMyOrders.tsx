import React from 'react';
import { useGetAllOrdersQuery } from '../services/usersApi';
import { Alert, Col, Divider, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import { Loader } from '../components';
import { Book } from '../models';
import BookCard from '../components/Cards/BookCard';

const GetMyOrders: React.FC = () => {
    const { data: books, isFetching, isError } = useGetAllOrdersQuery(1)
    console.log(books)
    if (isFetching) {
        return <Loader />;
    }

    if (isError) {
        return <Alert message="Error loading books" type="error" />;
    }

    for (let i = 0; i < books.length; i++) {
        console.log(books[i].Book.title)
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
