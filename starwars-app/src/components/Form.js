import React, { useState, useContext } from 'react'
import '../assets/styles/Form.css'
import Api from '../utils/Api'
import { CharactersContext } from '../providers/characters'


const Form = ({loadCharacters}) => {
    //const {loadCharacters} = useContext(CharactersContext);
    
    const initialValues = {
        name: "", 
        height: "", 
        mass: "", 
        hair_color: "", 
        skin_color: "", 
        eye_color: "", 
        birth_year: "", 
        gender: "",
        avatar:""
    }

    const [character, setCharacter] = useState(initialValues)

    const { name, height, mass, hair_color ,skin_color, eye_color, birth_year, gender } = character

    const handleChange = async (event) => {
        console.log("change")
        const { name, value } = event.target;
        setCharacter((prevState) => {
            if(name === 'avatar'){
                return {
                    ...prevState,
                    [name]: event.target.files[0],
                  };
            }else{
                return {
                    ...prevState,
                    [name]: value,
                  };
            }
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        var formData = new FormData();
        
        Object.keys(character).forEach((value) =>{
            formData.append(value,character[value])
        });

        const response = await Api.createCharacter(formData)

        if (response.status === 200){
            loadCharacters()
            setCharacter(initialValues)
            document.querySelector('input[name="avatar"]').value=null;
        }else{
            console.log(response.status)
        }
        
        console.log('submit click')
    }
 
    return (
            <div className='contain-form'>
                <form onSubmit={handleSubmit} encType="multipart/form-data" >
                    <div>
                        <div className='item-form'>
                            <label>name</label>
                            <input className='input-form' type='text' id='name' name='name' value={name} onChange={handleChange}/>
                        </div>
                        <div className='item-form'>
                            <label>mass</label>
                            <input className='input-form' type='text' id='mass' name='mass' value={mass} onChange={handleChange}/>
                        </div>
                    </div>        
                    <label>height</label>
                    <input className='input-form' type='text' id='height' name='height' value={height} onChange={handleChange}/>
                    <label>hair_color</label>
                    <input className='input-form' type='text' id='hair_color' name='hair_color' value={hair_color} onChange={handleChange}/>
                    <label>skin_color</label>
                    <input className='input-form' type='text' id='skin_color' name='skin_color' value={skin_color} onChange={handleChange}/>
                    <label>eye_color</label>
                    <input className='input-form' type='text' id='eye_color' name='eye_color' value={eye_color} onChange={handleChange}/>
                    <label>birth_year</label>
                    <input className='input-form' type='text' id='birth_year' name='birth_year' value={birth_year} onChange={handleChange}/>
                    <label>gender</label>
                    <input className='input-form' type='text' id='gender' name='gender' value={gender} onChange={handleChange}/>
                    <label>avatar</label>
                    <div className='group-form input-form'>
                        <input type='file' id='avatar' onChange={handleChange} name='avatar' accept='image/png, image/jpeg ,image/jpg' />
                    </div>
                    <button type='submit'>Salvar</button>
                </form>
            </div> 
    )
}

export default Form