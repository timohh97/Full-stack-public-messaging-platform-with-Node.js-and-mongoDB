const express = require('express')
const serverless = require('serverless-http')
const server = express()
const router = express.Router()

router.get("/", (req,res)=>
{
    res.json({"Hello":"Hi!"})
}
)


server.use("/.netlify/functions/server",router)
module.exports.handler = serverless(server)

