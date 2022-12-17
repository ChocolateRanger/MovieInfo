import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import MovieDesc from './components/MovieDesc/MovieDesc';
import { useState } from 'react';

function App() {

  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/home" element={<MainPage limit={limit} />}/>
          <Route path="/MovieDesc" element={<MovieDesc />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
