import React from 'react'
import Navbar from './Navbar'
import '../assets/styles/Header.css'
import logo from '../assets/imgs/logo.png'


const Header = () => {
  return (
    <div className='header'>
        <img alt='logo StarWars' src={logo}/>
        <Navbar/>
    </div>
  )
}

export default Header