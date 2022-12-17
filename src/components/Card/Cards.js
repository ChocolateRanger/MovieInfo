import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

const Cards = (props) => {
  return (
    <>
      <Link to="/MovieDesc" className='LinkCard'>
        <div className="card">
          <img src={props.image} alt="Avatar" className='images' />
          <div className="details">
            <h4><b>{props.title}</b></h4>
            <p className='playbtn'>Play now</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Cards