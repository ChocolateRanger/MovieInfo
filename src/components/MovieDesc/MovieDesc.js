import React from 'react'
import Navbar from '../Navbar/Navbar'
import './index.css'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import LoadMore from '../LoadMore/LoadMore'

const MovieDesc = () => {

  const navigate = useNavigate();

  const [genre, showGenre] = useState("");
  const [duration, setDuration] = useState("");
  const [plot, setPlot] = useState("")
  const location = useLocation();
  const [moreData, setMoreData] = useState([]);
  const [user, setUser] = useState("");
  const [mygenre, setmyGenre] = useState("")

  const updateDetails = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '65c5b56e26mshbcc5d572b32e4c4p189321jsn0aa90f9ff933',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };

    fetch(`https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${location.state.id}&currentCountry=US`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        showGenre(response.genres + ' ');
        setmyGenre(response.genres);
        setDuration(response.runningTimeInMinutes ? response.runningTimeInMinutes + "mins" : "Time not specified");
        setPlot(response.plotOutline.text);
      })
      .catch(err => console.error(err));
  }

  const LoadMoreMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '65c5b56e26mshbcc5d572b32e4c4p189321jsn0aa90f9ff933',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };

    fetch(`https://imdb8.p.rapidapi.com/title/v2/find?title=game%20of&titleType=movie&limit=20&sortArg=moviemeter%2Casc&genre=${mygenre}`, options)
      .then(response => response.json())
      .then((response => {
        setMoreData(response.results);
        console.log(moreData);
      }))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    updateDetails();
    LoadMoreMovies();

    // eslint-disable-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    updateDetails();

    // eslint-disable-line react-hooks/exhaustive-deps
  }, [location.state.id])
  


  return (
    <>
      <Navbar />
      <div>
        {console.log(location.state)}
        <div className='MovieDescription'>
          <div className='sec1'>
            <img className='movie-image' src={location.state.image} alt="MoveDescPoster" />
          </div>
          <div className='overview'>
            <h3>{location.state.title}</h3>
            <div>
              {genre}
            </div>
            <div>
              Duration : {duration}
            </div>
            <div className='buttons'>
              <button className='btn1'>Watch Now</button>
              <span>
                <button className='btn2'>Watch Later</button>
              </span>
            </div>
          </div>
        </div>
        <div className='description'>
          {plot}
        </div>
        { }
        <div className='section2'>
          <p className='header'>SIMILAR MOVIES</p>

          <div className='Similar'>
            {moreData.map((e) => {

              const toMovieDesc = () => {
                let movieid = e.id;
                console.log(e.title)
                let word = '/title/';
                let actualId = movieid.slice((movieid.indexOf(word) + word.length), movieid.length - 1);

                navigate('/MovieDesc', { state: { id: actualId, title: e.title, image: e.image.url } })

              }

              return <div className='SimilarItems' key={e.id} onClick={() => {
                toMovieDesc();
                setUser({ ...user });

              }}>
                <LoadMore image={e.image.url
                } title={e.title} />
              </div>
            })}
          </div>
        </div>
      </div>
    </>

  )
}

export default MovieDesc