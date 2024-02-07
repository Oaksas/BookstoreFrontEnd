import React from 'react'
import { Col, Divider, Layout, Row } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';

const AllBooks: React.FC = () => {
    return (
        <Layout>
            <Divider orientation="left"><Title > All Books</Title></Divider>
            <Row gutter={[32, 32]}>
                <Col xs={24} sm={12} lg={6} className="gutter-row" span={6}>
                    <div className='cards'>col-6</div>
                </Col>
                <Col xs={24} sm={12} lg={6} className="gutter-row" span={6}>
                    <div className='cards'>col-6</div>
                </Col>
                <Col xs={24} sm={12} lg={6} className="gutter-row" span={6}>
                    <div className='cards'>col-6</div>
                </Col>
                <Col xs={24} sm={12} lg={6} className="gutter-row" span={6}>
                    <div className='cards'>col-6</div>
                </Col>
            </Row>
        </Layout>)
}

export default AllBooks