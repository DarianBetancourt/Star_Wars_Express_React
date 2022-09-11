import React from 'react'
import Gif from '../assets/imgs/loading.gif'
import '../assets/styles/Loading.css'

const Loading = () => {
  return (
    <div className='loading-content'>
        <img alt='loading' className='loading' src={Gif}/>
    </div>
  )
}

export default Loading