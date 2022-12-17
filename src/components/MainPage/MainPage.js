import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Cards from '../Card/Cards';
import './MainPage.css';


const MainPage = (props) => {

  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);


  const handleNextClick = async () => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '65c5b56e26mshbcc5d572b32e4c4p189321jsn0aa90f9ff933',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };

    fetch(`https://imdb8.p.rapidapi.com/title/v2/find?title=game%20of&limit=${props.limit}&paginationKey=${page + 1}&sortArg=moviemeter%2Casc`, options)
      .then(response => response.json())
      .then((response => {
        setResult(response.results)
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
         console.log(result);
       }))
      .catch(err => console.error(err));
  }

  useEffect(() => {
      updateMovies();
  }, [])


  return (
    <>
      <Navbar />
      <div className='CardContainer'>
        {result.map((element) => {
          return <div key={element.id} onClick={() => {
            console.log("Card is clicked")
          }}>
            <Cards image={element.image.url} title={element.title} />
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