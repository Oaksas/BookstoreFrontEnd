import React, { useState, useEffect, useRef } from 'react';
import { Col, Divider, Row, Alert, Input } from 'antd';
import Title from 'antd/es/typography/Title';
import BookCard from './Cards/BookCard';
import { useGetAllBooksQuery } from '../services/bookStoreApi';
import { Book } from '../models';
import { Loader } from '.';

const AllBooks: React.FC = () => {
    const { data: allBooks, isFetching, isError } = useGetAllBooksQuery();
    const [filter, setFilter] = useState<string>('');
    const [visibleBooks, setVisibleBooks] = useState<Book[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (allBooks) {
            setVisibleBooks(allBooks.slice(0, 10)); // Initial display limit
        }
    }, [allBooks]);

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        const target = entries[0];
        if (target.isIntersecting) {
            const currentVisibleCount = visibleBooks.length;
            if (allBooks) {
                const newVisibleBooks = allBooks.slice(0, currentVisibleCount + 10);
                setVisibleBooks(newVisibleBooks);
            }

        }
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.8, // target display limit
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [visibleBooks]);

    if (isFetching) {
        return <Loader />;
    }

    if (isError) {
        return <Alert message="Error loading books" type="error" />;
    }

    const filteredBooks = visibleBooks.filter((book: Book) =>
        book.title.toLowerCase().includes(filter.toLowerCase()) ||
        book.author.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <Divider orientation="left">
                <Title>All Books</Title>
            </Divider>
            <Input
                placeholder="Filter by title or author"
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
