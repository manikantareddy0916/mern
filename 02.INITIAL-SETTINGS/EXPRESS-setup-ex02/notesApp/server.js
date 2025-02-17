const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

let notes =[
    {id: 1, note:'hello1'},
    {id: 2, note:'hello2'},
    {id: 3, note:'hello3'}
]

app.get('/notes',(req,res)=>{
    res.json(notes)
})
//delete
app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id
    console.log('j',id)
    let data = notes.findIndex((ele)=>{
        //console.log('jjj',ele.id === Number(id))
        console.log('jjj',ele)//
        if(ele.id === Number(id)){
            notes.splice((ele.id -1), 1)
        }
        return ele.id === Number(id) 
    }) 
    console.log('data',data)//it will give index 
    console.log('notes[]',notes[data])//it will give index 
    res.json(notes[data])
    
})

//post 
app.post('/create-note',(req,res)=>{
    const body =req.body
    console.log('j',body)
    const note ={
        id:Number(new Date()),
        data: body.note
    }
    notes.push(note)
    res.json(note)
})



app.listen(3077,()=>{
    console.log('port running 3077')
})