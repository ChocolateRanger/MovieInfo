import React from 'react'
import './index.css';

const LoadMore = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt="MovieDesc-Image" className='images' />
            <div className="details">
                <p><b>{props.title}</b></p>
                <p className='playbtn'>Play now</p>
            </div>
        </div>
    )
}

export default LoadMore