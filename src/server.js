const express = require('express')
const serverless = require('serverless-http')
const server = express()
const router = express.Router()
const mongoose = require('mongoose')
const PostModel = require('./PostModel')
const bodyParser = require("body-parser")
const cors = require("cors")
URL = "mongodb+srv://mainuser:test@cluster-0gtou.mongodb.net/test?retryWrites=true&w=majority"

server.use(cors())
server.use(bodyParser.json())

mongoose.connect(URL,
    { useNewUrlParser: true , useUnifiedTopology: true}, () =>
    {
        console.log("Connected with database successfull!")
    })

router.get("/", async (request, response)=>
{
     try{
     const data = await PostModel.find()
     console.log(data)
     response.json(data)
     console.log("Get request successful.")
     }
     catch(error)
     {
          console.log(error)
          response.json(error)
     } 
    
})

router.post("/", (request, response) => {
    console.log("The post request is: " + request.body)

    const postaction = new PostModel({
        username: request.body.username,
        password: request.body.password
    })


    postaction.save().then(result => {
        response.json(result)
        console.log(result)
        console.log("Post request successful.")
    })
        .catch(error => {

            response.json(error)
            console.log(error)
        })


})


server.use("/.netlify/functions/server",router)
module.exports.handler = serverless(server)

