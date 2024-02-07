
import './App.css'
import { Button } from 'antd';
import { BookDetail, Home } from './features';
import { Navbar } from './components';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/books/:bookid' element={<BookDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
