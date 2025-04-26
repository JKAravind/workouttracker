const express = require(express);
const connectDB = require("./config/connectDB")

const app = express();

app.use(express.json())

const startServer = async () =>{
    await connectDB();
    app.listen(5000,()=>{console.log("success")})
}
startServer();