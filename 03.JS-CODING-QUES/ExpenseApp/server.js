//1-connected to express server create package.json file -- npm init -y
//2-connected to mongodb  -- moongoogse.connecct
//3-created model and schema
//4-express validations (1-install express-validator,2-write validationSchema,3-checkSchema required)

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { checkSchema, validationResult }= require('express-validator')


const app = express()
app.use(cors())
app.use(express.json())
const port = 3067

//connecting mongodb
mongoose.connect('mongodb://127.0.0.1:27017/expenseapp-2025')
    .then(()=>{
        console.log('connected to db')
    })
    .catch((e)=>{
        console.log('not connected db',e)
    })

//model and scheema
const { Schema, model} = mongoose

const categorySchema = new Schema({
    name : String,
},{timestamps: true})

const expenseSchema = new Schema({
    expenseDate: Date,
    amount : Number,
    description: String
},{timestamps : true})

const Category = model('Category', categorySchema)
const Expense = model('Expense',expenseSchema)

//validation Schema
const expenseValidationSchema = {
    amount:{
        notEmpty:{
            errorMessage:'not Empty amount'
        },
        custom:{
            options:  function(value){
                console.log('value',value)
                if(!(value > 500)){
                    throw new Error('amount always grater than 500 ')
                }else{
                    return true
                }
            }
        },
        custom : {
            options: function(value){
                return Expense.findOne({amount:value})
                                .then((obj)=>{
                                    if(obj){
                                        throw new Error('already exist change amount')
                                    }
                                })
                                .catch((e)=>{
                                    res.json(e)
                                })
            }
        } 
    },
    
}



app.get('/all-category',(req,res)=>{
    Category.find()
        .then((cat)=>{
            res.json(cat)
        })
        .catch((e)=>{
            res.json(e)
        })
})
app.get('/all-expense',(req,res)=>{
    Expense.find()
        .then((exp)=>{
            res.json(exp)
        })
        .catch((e)=>{
            res.json(e)
        })
})
app.post('/create-category',(req,res)=>{
    const body = req.body //{name : 'abc'}
    const category = new Category()
    category.name = body.name
    category.save()
        .then((cat)=>{
            res.json(cat)
        })
        .catch((e)=>{
            res.json(e)
        })
})
app.post('/expense-create',checkSchema(expenseValidationSchema),(req,res)=>{
    const errors = validationResult(req)
    console.log('e',errors)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const body = req.body
    //console.log('j',body)
    const expense = new Expense(body)
        expense.save()
            .then((exp)=>{
                res.json(exp)
            })
            .catch((e)=>{
                res.json('e',e)
            })
})




app.listen(port, ()=>{
    console.log('server running',port)
})