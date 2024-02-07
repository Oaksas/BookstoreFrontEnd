
import './App.css'
import { Button } from 'antd';
import { BookDetail, Home } from './features';
import { Navbar } from './components';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/books/:bookid' element={<BookDetail />} />
      </Routes>

    </>
  )
}

export default App
