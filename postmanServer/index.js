const express = require("express")

const app = express()
const PORT = 9000
const hostname = "127.0.0.9"
// ...middleware...
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("hello from postman server")
})

app.get("/msg",(req,res)=>{
    res.status(400).send("postman is working successfully")
})

app.post("/data",(req,res)=>{
    console.log(req.body)
    res.send("API is working")
})

app.post("/urldata",(req,res)=>{
    console.log(req.body)
    res.send("data recieved")
})

//query
app.get("/query",(req,res)=>{
    console.log(req.query)
    res.send(req.query)
})

//params
app.get("/data/:id",(req,res)=>{
    console.log(req.params)
    res.send(req.params)
})

app.listen(PORT,hostname,() => {
    console.log(`server started at http://${hostname}:${PORT}`)
})