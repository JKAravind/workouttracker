const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    mail:{
        type:String,
        required:true,
        unique:true
    },
    username :{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }

})

const User = mongoose.model("User",userSchema)

module.exports = User