const personagemModel = require('../models/personagens.json')
const Personagem = require('../models/Personagem.js')
const fs = require('fs')
const { default: mongoose } = require('mongoose')
const path = require('path')


const findAllPersonagens = async (req,res) => {
    try {
        const personagens = await Personagem.find()
        return res.status(200).json(personagens)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
    //res.status(200).json(personagemModel)
}

const findOnePersonagemById = (req,res) => {
    const { id } = req.params
    const findPersonagem= personagemModel.find( personagem => personagem.id == id)
    res.status(200).json(findPersonagem)
}

const createPersonagem = async (req,res) => {
   
    const personagemExist = await Personagem.find({name: req.body.name})
        
    if (personagemExist.length != 0){
        return res.status(409).json({error:'personagem existe'})
    }else{
        const img_url = req.protocol + '://' + req.get('host') + req.path + '/' +req.file.destination+req.file.filename;
        //console.log(img_url)
        const personagem = new Personagem({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            height: req.body.height,
            mass: req.body.mass,
            hair_color: req.body.hair_color,
            skin_color: req.body.skin_color,
            eye_color: req.body.eye_color,
            birth_year: req.body.birth_year,
            gender: req.body.gender,
            img_url: img_url
        })

        try {
            const insert = await personagem.save()
            return res.status(200).json(personagem)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    
}

const updatePersonagem = (req,res) => {
    const updatePersonagem = req.body
    const { id } = req.params
    const personagem = personagemModel.find( personagem => personagem.id == id );

    try {
        if (personagem) {
            personagem.name = updatePersonagem.name || personagem.name
        
            fs.writeFile('./src/models/personagens.json',JSON.stringify(personagemModel),'utf-8',(err) => {
                if(err){
                    return res.status(424).send({message:err})
                }
            })
        
            res.status(200).json(personagem)
        }else{
            res.status(404).send('Personagem não encontrado')
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }


}

const deletePersonagem = (req,res) =>{
    try {
        const { id } = req.params
        const message = 'Personagem deletado com sucesso!'
        const personagem = personagemModel.find( personagem => personagem.id == id );

        if (personagem) {
            //deleta o personagem com o id da req
            personagemModel.splice(id, 1)

            //escrivendo no arquivo json as modificações feitas
            fs.writeFile('./src/models/personagens.json',JSON.stringify(personagemModel),'utf-8',(err) => {
                if(err){
                    return res.status(424).send({message:err})
                }
            })

            //resposta
            res.status(200).send(message)
        }else{
            res.status(404).send('Personagem não encontrado')
        }
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

const getAvatar = (req,res) => {
    const { file } = req.params
    const rutaAbsoluta = path.resolve('uploads', file)
    //console.log(rutaAbsoluta) 
    res.status(200).sendFile(rutaAbsoluta)
}
 
module.exports = {
    findAllPersonagens,
    findOnePersonagemById,
    createPersonagem,
    updatePersonagem,
    deletePersonagem,
    getAvatar
}