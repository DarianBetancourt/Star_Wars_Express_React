import React from 'react'
import '../assets/styles/List.css'

const List = ({characters}) => {

    const listCharacters = characters.map((element) =>
        <li key={element._id}>
            <div>{element.name}</div>
            <div><img className='img-person' alt={element.name} src={element.img_url}/></div>
        </li>

    );
    
    return (
        <div className='contain-characters-list'>
            <ul className='characters-list'>
                {listCharacters}
            </ul>
        </div>
    )
}

export default List