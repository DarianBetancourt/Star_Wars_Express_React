import React from 'react'
import '../assets/styles/Navbar.css'
import star from '../assets/imgs/death-star.png'

const Navbar = () => {
  return (
    <nav> 
        <img className='img-nav' alt='image' src={star}/>
        <ul className="menu"> 
            <li className="logo">
                <a href="#">React App</a>
            </li> 
            <li className="item">
                <a href="/">Home</a>
            </li> 
            <li className="item">
                <a href="/new">New Character</a>
            </li> 
            <li className="item">
                <a href="/About">About</a>
            </li> 
            <li className="item">
                <a href="/Features">Features</a>
            </li> 
            <li className="item">
                <a href="/Contact">Contact</a> 
            </li> 
            <li className="item button">
                <a href="#">Log In</a>
            </li> 
            <li className="item button secondary">
                <a href="#">Sign Up</a>
            </li> 
            <li className="toggle">
                    <a href="#">
                        <i className="fas fa-bars"></i>
                    </a>
            </li> 
        </ul> 
    </nav>
  )
}

export default Navbar