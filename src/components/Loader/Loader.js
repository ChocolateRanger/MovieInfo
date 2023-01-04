import React from 'react'
import './index.css';
import { BeatLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className='Loading'>
      <BeatLoader color="#36d7b7" size={60}/>
    </div>
  )
}

export default Loader