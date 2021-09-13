const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name:{
        type:"string",
        require:true,
        min:6,
        max:20

    },
    email : {
        type:"string",
        max:20,
        unique:true,
    },
    password:{
        type:"string",
        unique:true,
        min:8

    },
    phone:{
        type:"string",
        max:10
    }
})

const Student = new mongoose.model('Student',studentSchema);
module.exports = Student; 