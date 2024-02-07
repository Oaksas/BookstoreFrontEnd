
import './App.css'
import { Button } from 'antd';
import { BookDetail, Home } from './features';
import { Navbar } from './components';
import { Route, Routes } from 'react-router-dom';
import GetMyOrders from './features/GetMyOrders';
import UserLogin from './components/Login';
import UserSignup from './components/Signup';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/books/:bookid' element={<BookDetail />} />
        <Route path='/myOrders' element={<GetMyOrders />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />

        <Route path="/books/:bookid" element={<BookDetail />} />

      </Routes>

    </>
  )
}

export default App
