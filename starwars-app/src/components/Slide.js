import React from 'react'
import '../assets/styles/Card.css'
import Logo from '../assets/imgs/starwars.png'
import BackArrow from '../assets/imgs/back-arrow-icon.png'

function Slide({character}) {
  return (
    
        <div className='card-contain'>
            <div className='back-card'>
                <div className='contain-back-arrow'>
                    <img className='back-arrow' alt='back' src={BackArrow}/>
                </div>
                <div className='contain-img-back-card'>
                    <img  className='img-back-card' alt='logo starwars' src={Logo}/>
                </div>
            </div>
            <div className='front-card'>
                <div className='character-img'>
                    <img alt={character.name} src={character.img_url}/>
                </div>
                <div className='contain-next-arrow'>
                    <img className='next-arrow' alt='next' src={BackArrow}/>
                </div>
            </div>
        </div>
    
  )
}

export default Slide