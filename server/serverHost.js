const express = require("express");
const connectDB = require("./config/connectDB")
const User = require("./models/userModels")
const cors = require("cors")
const authRoutes = require("./routes/authRoutes")

const app = express();

app.use(express.json())
app.use(cors())

const startServer = async () =>{
    await connectDB();

    app.use("/auth",authRoutes)



    app.listen(3000,()=>{console.log("success")})

}
startServer();