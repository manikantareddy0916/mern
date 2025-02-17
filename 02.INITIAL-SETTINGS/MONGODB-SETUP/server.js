const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

//mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/notesapp-2025')
    .then(()=>{
        console.log('connected to db')
    })
    .catch((e)=>{
        console.log('erroe',e)
    }) 

//schema and model
const {Schema, model}= mongoose //it will helps to get all thrid party libries 
//schema
const noteSchema = new Schema({
    body: String,

})
//model
const Notemodel = model('Note',noteSchema)

//get
    app.get('/list-notes',(req,res)=>{
        Notemodel.find()
            .then((notes)=>{
                res.json(notes)
            })
            .catch((e)=>{
                res.json(e)
            })
    })
//post
app.post('/create-note',(req,res)=>{
    const body=req.body
    const note = new Notemodel(body)
    note.save()
        .then((data)=>{
            res.json(data)
        })
        .catch((e)=>{
            res.json(e)
        })
})




app.listen(3043,()=>{
    console.log('server is running 3043')
})