const express = require('express')
const res = require('express/lib/response')
const server = express()
const curso = ['Node Js','JavaScript', 'React Native', 'React']

//Query Params

server.get('/curso', (req, res)=>{
    const nome = req.query.nome
    return res.json({nome:`Aprendendo ${nome}`})
})

 server.get('/cursos/:index', (req, res)=>{
    const {index } = req.params
    return res.json({cursos: `${index}`})
 })
server.listen(3000)
