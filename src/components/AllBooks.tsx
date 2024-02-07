import React, { useState } from 'react';
import { Col, Divider, Row, Alert, Input } from 'antd';
import Title from 'antd/es/typography/Title';
import BookCard from './Cards/BookCard';
import { useGetAllBooksQuery } from '../services/bookStoreApi';
import { Book } from '../models';
import { Loader } from '.';

const AllBooks: React.FC = () => {
    const { data: allBooks, isFetching, isError } = useGetAllBooksQuery();
    const [filter, setFilter] = useState<string>('');


    if (isFetching) {
        return <Loader />;
    }

    if (isError) {
        return <Alert message="Error loading books" type="error" />;
    }
    if (!allBooks) {
        return <Alert message="No books found" type="info" />;
    }
    const filteredBooks = allBooks.filter((book: Book) =>
        book.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <Divider orientation="left">
                <Title>All Books</Title>
            </Divider>
            <Input
                placeholder="Filter by Title"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                style={{ margin: '16px', width: '300px' }}
            />

            <Row gutter={[32, 32]}>
                {!filteredBooks.length && (
                    <Alert message="No books found" type="info" style={{ width: '50%', margin: '20px' }} />
                )}
                {filteredBooks?.map((book: Book) => (
                    <Col key={book.id} xs={24} sm={12} md={8} lg={6}>
                        <BookCard book={book} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default AllBooks;
