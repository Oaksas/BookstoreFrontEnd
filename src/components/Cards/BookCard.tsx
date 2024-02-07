import React from 'react';
import { Badge, Card } from 'antd';
import { Book } from '../../models';
import { Link } from 'react-router-dom';

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
                    title={'$' + book.price}
                    cover={<img alt={book.title} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >

                    <Meta title={book.title} description={book.author} />

                </Card>
            </Link>
        </div >
    );
};

export default BookCard;
