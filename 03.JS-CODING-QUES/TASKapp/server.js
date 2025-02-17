//1.create package.json (npm install init -y)
//2. install packages
//3. connect express server
//4. connect mongodb server
//5. create Schema and model


const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { checkSchema, validationResult } = require('express-validator')

const app = express()
app.use(cors())
app.use(express.json())
const port = 3098

//database connected mongoose
mongoose.connect('mongodb://127.0.0.1:27017/taskapp-2025')
        .then(()=>{
            console.log('connected to db')
        })
        .catch((e)=>{
            console.log('not connected to db',e)
        })

//schema and model
const {Schema, model}= mongoose

//Schema
const taskSchem = new Schema({
    title : String,
    description : String,
    status: String,
},{timestamps: true})

//model
const Task = model('Task',taskSchem)


//express validation
const appUpdateSchema ={

}

const appValidationSchema ={
    title:{
        in:['body'],
        exists:{
            errorMessage:'title is required'
        },
        notEmpty:{
            errorMessage: "title cannot be empty"
        },
        isLength:{
            optioons:{min:5},
            errorMessage:"titiel should atleast 5 char"
        },
        custom:{
            options: function(value){
                return Task.findOne({title : value})
                            .then((task)=>{
                                if(task){
                                    throw new Error('title already exit')
                                }else{
                                    return true
                                }
                            })
            }
        }
    },
    description:{
        in:['body'],
        exists:{
            errorMessage:'description is required'
        },
        notEmpty:{
            errorMessage: "description cannot be empty" 
        },
        isLength:{
            optioons:{min:5},
            errorMessage:"description should atleast 5 char"
        }
    },
    status:{
        in:['body'],
        exists:{
            errorMessage:'status is required'
        },
        notEmpty:{
            errorMessage: "status cannot be empty"
        },
        // isIn : [['pending','in progrss', 'completed']],
        errorMessage: 'status should be on of (pending,in progrss, completed) '
    }
}

app.use(express.json())

app.post('/tasks',checkSchema(appValidationSchema),(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const body = req.body
    Task.create(body)
        .then((task)=>{
            res.status(201).json(task)
        })
        .catch((e)=>{
            res.status(500).json({error:'internal server error'})
        })
})

app.get('/tasks',(req,res)=>{
    Task.find()
        .then((tas)=>{
            res.status(400).json(tas)
        })
        .catch((e)=>{
            res.status(500).json({error:'internal server error',e})
        })
})

app.get('/tasks/:id',(req,res)=>{
    const id = req.params.id
    Task.findById({_id : id})
        .then((tas)=>{
            res.status(400).json(tas)
        })
        .catch((e)=>{
            res.status(500).json({error: 'internal server error', e})
        })
})

app.put('/tasks/:id',(req,res)=>{
    const id = req.params.id 
    const body = req.body

    Task.findByIdAndUpdate(id,body,{new: true})
        .then((tas)=>{
            //console.log('j')
            if(tas){
                //console.log('obj',tas)
                return res.status(400).json(tas)
            }else{
                return true
            }
        })
        .catch((e)=>{
            res.status(500).json({error: 'internal server error', e})
        })
})

app.delete('/tasks/:id',(req,res)=>{
    const id = req.params.id
    Task.findByIdAndDelete()
        .then((tas)=>{
            res.json(tas)
        })
        .catch((e)=>{
            res.json({error: 'server error'})
        })
})

//express server 
app.listen(port, ()=>{
    console.log('server running',port)
})