const express = require('express')
const router = express.Router()
const personagemRoute = require('./personagensRoutes')

router.get('/',(req, res) => {
    res.status(200).json({message:'ok'})
})

router.use(personagemRoute)

module.exports = router