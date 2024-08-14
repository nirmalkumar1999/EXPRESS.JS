const express = require("express")
const {join} =  require("path")
const app = express()

const PORT = 5000
const hostname = "127.0.0.5" 

// ...middleware...
// ...static folder middleware...
app.use(express.static(join(__dirname,"public")))
// ...json...
app.use(express.json())
// ...url...
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(join(__dirname,"public","pages","index.html"))
})

app.post("/send",(req,res)=>{
    console.log(req.body)
    res.send({message:"data recieved"})
})

app.get("/getdata",(req,res)=>{
   res.send({name:"akhil",age:24,address:"khammam"})
})
// app.get("/index.css",(req,res)=>{
//     res.sendFile(join(__dirname,"public","css","index.css"))
// })


app.post("/login",(req,res)=>{
    console.log(req.body)
    res.sendFile(join(__dirname,"public","pages","index.html"))
})


app.listen(PORT,hostname,() => {
    console.log(`server running in http://${hostname}:${PORT}`)
})

