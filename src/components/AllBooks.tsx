import React from 'react';
import { Col, Divider, Row, Alert } from 'antd';
import Title from 'antd/es/typography/Title';
import BookCard from './Cards/BookCard';
import { useGetAllBooksQuery } from '../services/bookStoreApi';
import { Book } from '../models';
import { Loader } from '.';

const AllBooks: React.FC = () => {
    const { data: allBooks, isFetching, isError } = useGetAllBooksQuery();

    if (isFetching) {
        return <Loader />;
    }

    if (isError) {
        return <Alert message="Error loading books" type="error" />;
    }
    if (!allBooks) {
        return <Alert message="No books found" type="info" />;
    }

    return (
        <>
            <Divider orientation="left">
                <Title>All Books</Title>
            </Divider>
            <Row gutter={[32, 32]}>
                {allBooks?.map((book: Book) => (
                    <Col key={book.id} xs={24} sm={12} md={8} lg={6}>
                        <BookCard book={book} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default AllBooks;
