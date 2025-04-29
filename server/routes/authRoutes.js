const express = require("express");
const router = express.Router()
const User = require("../models/userModels")

router.post("/register",async(req,res)=>{
    const{mail,username,password} = req.body

    try{

        const user = new User({mail,username,password})
        await user.save()
        res.status(201).json({ message: "User registered successfully!" });

    }

    catch(err){
        console.log(mail,username,password)
        console.error(err)
        res.status(500).json({ message: "User register unsuccessful!" });
    }
})

router.post("/login",async(req,res)=>{
    const{mail,password} = req.body

    try{
        const user = await User.findOne({mail})
        if (user.password === password){
            res.status(201).json({message:"Logged In"})
            console.log("success")
            return;
        }
        res.status(400)
        console.log("unscuu")
        

    }

    catch(err){
        console.error(err)
        console.log("No user exist")

    }
})

module.exports = router