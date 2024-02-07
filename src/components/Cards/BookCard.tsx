import React from 'react';
import { Card } from 'antd';
import { Book } from '../../models';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BookCoverImage } from '../../utils';

const { Meta } = Card;

interface BookCardProps {
    book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
    return (
        <div className="book-card-container">
            <Link to={`/books/${book.id}`}>
                <Card
                    className='cards'
                    hoverable
                    title={`$${book.price}`}
                    cover={<img alt={book.title} src={BookCoverImage()} />}
                >
                    <Meta
                        title={book.title}
                        description={
                            <>
                                {book.author}

                            </>
                        }

                    />
                    <div>
                        {book.rating}   <Rating
                            style={{ maxWidth: 100 }}
                            value={book.rating}
                            readOnly
                        />
                    </div>
                </Card>
            </Link>
        </div>
    );
};

export default React.memo(BookCard);
