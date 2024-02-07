import React from 'react';
import { Alert, Button, Col, Layout, Row, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { useGetBookByIdQuery } from '../services/bookStoreApi';
import { Loader } from '../components';

const { Content } = Layout;

const BookDetail: React.FC = () => {
    const { bookid } = useParams();
    const { data: book, isFetching, isError } = useGetBookByIdQuery(Number(bookid));

    if (isFetching) {
        return <Loader />;
    }

    if (isError) {
        return <Alert message="Error Fetching Detail" type="info" />;
    }

    return (
        <div className='container'>
            {book && (
                <Content>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' alt={book.title} style={{ width: '100%', height: 'auto' }} />
                        </Col>
                        <Col xs={24} sm={12} md={16} lg={18}>
                            <div>
                                <Typography.Title level={2}>{book.title}</Typography.Title>
                                <Typography.Title level={4}>{book.author}</Typography.Title>
                                <Typography.Title level={3}>{`$${book.price}`}</Typography.Title>
                                <Button type="primary" size="large">
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
