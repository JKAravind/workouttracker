const express = require("express");
const connectDB = require("./config/connectDB")
const User = require("./models/userModels")
const cors = require("cors")

const app = express();

app.use(express.json())
app.use(cors())

const startServer = async () =>{
    await connectDB();

    app.post("/register",async(req,res)=>{
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





    app.listen(3000,()=>{console.log("success")})

}
startServer();