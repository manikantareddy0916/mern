//npm init -y
//npm install express
//create a file server.js write code for setup express and run node server.js


const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const student =[
    {id:1, name:'arjun'},
    {id : 2, name: 'ram'}
]

app.get('/student',(req,res)=>{
    res.json(student)
})

app.listen(3066, ()=>{
    console.log('servr running 3066')
})