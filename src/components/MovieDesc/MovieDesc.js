import React from 'react'
import Navbar from '../Navbar/Navbar'
import './MovieDesc.css'

const MovieDesc = (props) => {
  return (
    <>
      <Navbar />
      <div className='MovieDescription'>
        <div className='sec1'>
          <img className='movie-image' src={props.poster} alt="image" />
        </div>
        <div className='overview'>
          <h3>Movie Title</h3>
          <div>
            
          </div>
        </div>
      </div>
    </>
    
  )
}

export default MovieDesc