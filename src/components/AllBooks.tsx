import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Col, Divider, Row, Alert, Input, Button } from 'antd';
import Title from 'antd/es/typography/Title';
import BookCard from './Cards/BookCard';
import { useGetAllBooksQuery } from '../services/bookStoreApi';
import { Book } from '../models';
import { Loader } from '.';

const AllBooks: React.FC = () => {
    const { data: allBooks, isFetching, isError } = useGetAllBooksQuery();
    const [filter, setFilter] = useState<string>('');
    const [visibleBooks, setVisibleBooks] = useState<Book[]>([]);
    const [tagFilters, setTagFilters] = useState<string[]>([]);
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
            threshold: 0.8,
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

    const handleTagFilter = ((tag: string) => {
        if (tagFilters.includes(tag)) {
            setTagFilters(tagFilters.filter((filter) => filter !== tag));
        } else {
            setTagFilters([...tagFilters, tag]);
        }
    });
    if (isFetching) {
        return <Loader />;
    }

    if (isError) {
        return <Alert message="Error loading books" type="error" />;
    }

    const tagButtons: string[] = [];

    if (allBooks) {
        allBooks.forEach((book) => {
            book.tags.forEach((tag) => {
                if (!tagButtons.includes(tag)) {
                    tagButtons.push(tag);
                }
            });
        });
    }

    const renderTagButtons = () => (
        <div style={{ margin: '16px' }}>
            {tagButtons.map((tag) => (
                <Button
                    key={tag}
                    style={{
                        margin: '4px',
                        backgroundColor: tagFilters.includes(tag) ? '#1890ff' : '#f0f0f0',
                        color: tagFilters.includes(tag) ? '#fff' : 'initial',
                        cursor: 'pointer',
                    }}
                    onClick={() => handleTagFilter(tag)}
                >
                    {tag}
                </Button>
            ))}
        </div>
    );

    const filterBooksByTags = (books: Book[], tags: string[]) => {
        return books.filter((book) => tags.every((tag) => book.tags.includes(tag)));
    };

    const filteredBooksByTags = filterBooksByTags(visibleBooks, tagFilters);

    const filteredBooks = filteredBooksByTags.filter((book: Book) =>
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

            {renderTagButtons()}

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

export default React.memo(AllBooks);
