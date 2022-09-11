import React, { useState } from 'react';
import Api from '../utils/Api'

export const CharactersContext = React.createContext({})

export const CharactersProvider = (props) =>{
    const [characters,setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    async function loadCharacters(){
        /* recebendo personagens */
        const data = await Api.getCharacters()
        if (data !== "error"){
            /* seteando personagens */
            setCharacters(data)
            //setError(false)
        }else{
            console.log('error')
            //setError(true)
        }
        setIsLoading(false)
    }

    return(
        <CharactersContext.Provider value={{characters , setCharacters, loadCharacters}}>
            {props.children}
        </CharactersContext.Provider>
    )
}