
import './App.css'
import { Button } from 'antd';
import { BookDetail, Home } from './features';
import { Navbar } from './components';
import { Route, Routes } from 'react-router-dom';
import GetMyOrders from './features/GetMyOrders';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/books/:bookid' element={<BookDetail />} />
        <Route path='/myOrders' element={<GetMyOrders />} />
      </Routes>

    </>
  )
}

export default App
