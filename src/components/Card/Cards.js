import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Cards = (props) => {
  return (
    <>
        <div className="card">
          <img src={props.image} alt="MainPage-image
          " className='images' />
          <div className="details">
            <p><b>{props.title}</b></p>
            <p className='playbtn'>Play now</p>
          </div>
        </div>
    </>
  )
}

export default Cards