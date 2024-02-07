import { Spin } from 'antd'
import React from 'react'

const Loader: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}><Spin /></div>)
}

export default Loader