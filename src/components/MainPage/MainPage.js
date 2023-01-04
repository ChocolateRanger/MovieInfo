import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Cards from '../Card/Cards';
import './index.css';
import MovieDesc from '../MovieDesc/MovieDesc';
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';


const MainPage = (props) => {

  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleNextClick = async () => {

    setLoading(true);

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '65c5b56e26mshbcc5d572b32e4c4p189321jsn0aa90f9ff933',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };

    fetch(`https://imdb8.p.rapidapi.com/title/v2/find?title=game%20of&titletype=move&limit=${props.limit}&paginationKey=${page + 1}&sortArg=moviemeter%2Casc`, options)
      .then(response => response.json())
      .then((response => {
        setResult(response.results)
        setLoading(false);
        console.log(result);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }))
      .catch(err => console.error(err));
    setPage(page + 1);
  }

  const updateMovies = async () => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '65c5b56e26mshbcc5d572b32e4c4p189321jsn0aa90f9ff933',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };

    fetch(`https://imdb8.p.rapidapi.com/title/v2/find?title=game%20of&limit=${props.limit}&sortArg=moviemeter%2Casc`, options)
      .then(response => response.json())
      .then((response => {
        setResult(response.results)
        setLoading(false);
        console.log(result);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    updateMovies();
 
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      <Navbar />
      {loading && <Loader />}
      <div className='CardContainer'>
        {!loading && result.map((element) => {

          const toMovieDesc = () => {
            let movieid = element.id;
            let word = '/title/';
            let actualId = movieid.slice((movieid.indexOf(word) + word.length), movieid.length - 1);

            navigate('/MovieDesc', { state: { id: actualId, title: element.title, image: element.image.url } })
          }

          return <div key={element.id} onClick={() => {
            toMovieDesc();
          }}>
            <Cards image={element.image.url} title={element.title} onClick={() => { console.log(element.title) }} />
          </div>
        })}
      </div>
      <div>
        <button className='Morebtn' onClick={handleNextClick}>
          See More
        </button>
      </div>


    </>
  )
}

export default MainPage