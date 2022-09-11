const express = require('express')
const personagemController = require("../controllers/personagemController")
const personagemRouter = express.Router()
const upload =require('../middlewares/upload')

/* const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, req.body.name.replace(' ','_')+'.png')
    }
  })
const upload = multer({ storage: storage }) */

personagemRouter.get('/personagens', personagemController.findAllPersonagens)
personagemRouter.post('/personagens',upload.single('avatar'), personagemController.createPersonagem)
personagemRouter.get('/personagens/:id', personagemController.findOnePersonagemById)
personagemRouter.patch('/personagens/:id', personagemController.updatePersonagem)
personagemRouter.delete('/personagens/:id', personagemController.deletePersonagem)
personagemRouter.get('/personagens/uploads/:file', personagemController.getAvatar)

module.exports = personagemRouter