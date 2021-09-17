const express = require("express");
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser')

const httpServer = express();

httpServer.use('/', cors())
httpServer.use('/', bodyParser.json())
httpServer.use('/', bodyParser.urlencoded({ extended: true }))

httpServer.get("/test",function (_req,res){
    res.setHeader("Content-Type","application/json")
    res.status(200).send('{"data":"hello world"}')
})

const port = process.env.PORT || 8080
httpServer.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})
