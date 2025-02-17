const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect(`mongodb+srv://ashikameens70:<db_8970736107>@cluster0.96qg4.mongodb.net/`)
.then(()=>{console.log("server connected successfully")})
.catch(err => {console.log("The erros is ",err)})

// Restaurant Schema
const restaurantSchema = new mongoose.Schema({
    name:{type : String,required : true},
    city:{type : String,required : true},
    items:{type : mongoose.Types.ObjectId, ref : 'item'},
})

const restaurant = mongoose.model('restaurant',restaurantSchema);

//Item Schema
const itemSchema = new mongoose.Schema({
    name:{type : String,required : true},
    Price:{type : Number,required : true},
})

const item = mongoose.model('item',itemSchema);

app.get('/',(req,res)=>{
    return res.json({
        "working!" : "The server is working"
    })
})

app.listen(3000,()=>{console.log('server is running on http://localhost:3000')})
