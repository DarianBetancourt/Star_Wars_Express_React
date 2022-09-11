import React,{useContext} from 'react'
import Form from '../components/Form'
import { CharactersContext } from '../providers/characters'

const NewCharacter = () => {
const { loadCharacters } = useContext(CharactersContext);
  return (
    <div>
        <Form loadCharacters={loadCharacters}/>
    </div>
  )
}

export default NewCharacter