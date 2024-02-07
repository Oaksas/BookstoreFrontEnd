import React from 'react';
import { Card } from 'antd';
import { Book } from '../../models';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

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
                    cover={<img alt={book.title} src="https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg" />}
                >
                    <Meta
                        title={book.title}
                        description={
                            <>
                                {book.author}

                            </>
                        }
                    />
                </Card>
            </Link>
        </div>
    );
};

export default BookCard;
