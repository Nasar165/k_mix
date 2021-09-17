const express = require("express");
require('dotenv').config();
const cors = require('cors');
const httpServer = express();

httpServer.use('/', cors())

httpServer.get("/test",function (_req,res){
    res.send("hello world")
})

const port = process.env.PORT || 8080
httpServer.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})
