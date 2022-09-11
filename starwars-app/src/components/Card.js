import React from 'react'
import '../assets/styles/Card.css'
import Logo from '../assets/imgs/starwars.png'

function Card({character}) {
  return (
    
        <div className='card-contain'>
            <div className='back-card'>
                <div className='contain-img-back-card'>
                    <img  className='img-back-card' alt='logo starwars' src={Logo}/>
                </div>
            </div>
            <div className='front-card'>
                <div className='character-img'>
                    <img alt={character.name} src={character.img_url}/>
                </div>
                <div className='character-description'>
                    <h1>{character.name}</h1>
                    <div className='neon-white'>
                        <div className='item-description'>
                            <label><span>birth year</span> : {character.birth_year}</label>
                        </div>
                        <div  className='item-description' >
                            <label><span>eye_color</span> : {character.eye_color}</label>
                        </div>
                        <div className='item-description'>
                            <label><span>gender</span> : {character.gender}</label>
                        </div>
                        <div className='item-description'>
                            <label><span>hair_color</span> : {character.hair_color}</label>
                        </div>
                        <div className='item-description'>
                            <label><span>height</span> : {character.height}</label>
                        </div>
                        <div className='item-description'>
                            <label><span>mass</span> : {character.mass}</label>
                        </div>
                        <div className='item-description'>
                            <label><span>skin_color</span> : {character.skin_color}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Card