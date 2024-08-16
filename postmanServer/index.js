const express = require("express")

const app = express()
const PORT = 9000
const hostname = "127.0.0.9"

app.get("/",(req,res)=>{
    res.send("hello from postman server")
})

app.get("/msg",(req,res)=>{
    res.status(400).send("postman is working successfully")
})

app.listen(PORT,hostname,() => {
    console.log(`server started at http://${hostname}:${PORT}`)
})