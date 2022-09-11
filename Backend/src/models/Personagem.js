const mongoose = require('mongoose')

const personagemSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: true
    },
    height:{
        type: String,
        required: true
    },
    mass:{
        type: String,
        required: true
    },
    hair_color:{
        type: String,
        required: true
    },
    skin_color:{
        type: String,
        required: true
    },
    eye_color:{
        type: String,
        required: true
    },
    birth_year:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    img_url:{
        type: String,
        required: true
    }
},{
    versionKey: false
})

//personagemModel = mongoose.model('personagemModel',localSchema)
module.exports = mongoose.model('Personagem',personagemSchema)