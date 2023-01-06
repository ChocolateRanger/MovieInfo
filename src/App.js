import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import MovieDesc from './components/MovieDesc/MovieDesc';
import Genres from './components/Genres/Genres';

function App() {

  let limit = 6;
  const apiKey = process.env.REACT_APP_API_KEY
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage key={LoginPage}/>} />
          <Route exact path="/home" element={<MainPage limit={limit} key={MainPage} apiKey={apiKey} />} />
          <Route exact path="/MovieDesc" element={<MovieDesc key={window.location.pathname} apiKey={apiKey} />} />
          <Route exact path="/Genre" element={<Genres key={Genres} apiKey={apiKey} />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
