import React from 'react'
import Card from './Card'
import '../assets/styles/Characters.css'

const Characters = ({characters}) => {
    const CardsCharacters = characters.map((element)=>
        <Card key={element._id} character={element}/>
    )
  return (
    <div className='contain-characters'>
        {CardsCharacters}
    </div>
  )
}

export default Characters