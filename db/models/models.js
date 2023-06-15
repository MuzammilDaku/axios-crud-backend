var mongoose = require('mongoose')
var validator = require('validator')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email Already Present"],
        validate(value){
       if (!validator.isEmail(value)){
        throw new Error('Invalid Email')
       }
        }   
    },
    phone:{
      type:Number,
      min:10,
      required:true,
      unique:true
    },
    address:{
        type:String,
        required:true,
    }
})

const Students = new mongoose.model('Student',studentSchema)
module.exports=Students

