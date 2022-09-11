import React, { useEffect, useState, useContext} from 'react'
import Loading from '../components/Loading'
import { CharactersContext } from '../providers/characters'
import '../assets/styles/Home.css'
import anakin from '../assets/imgs/anakin_skywalker.png'
import nave from '../assets/imgs/Nave.png'
import Characters from '../components/Characters'




const Home = () => {
    //const [isLoading, setIsLoading] = useState(false);

    const { characters, setCharacters , loadCharacters,isLoading, setIsLoading} = useContext(CharactersContext);
    const [error, setError] = useState(false)
    
    /* async function loadCharacters(){
        const data = await Api.getCharacters()
        if (data !== "error"){
            setCharacters(data)
            setError(false)
        }else{
            setError(true)
        }
        setIsLoading(false)
    } */

    useEffect(() => {   
        loadCharacters()
    },[])
    
  return (
    <>
        <div className='contain-home'>
            
            {isLoading ? <Loading/> : error ? "error getting the characters" 
            : <Characters characters = {characters}/>
            }
            <img className='img-anakin' alt='anakin' src={anakin}/>
            <img className='img-nave' alt='anakin' src={nave}/>
        </div>
        
    </>
  )
}

export default Home