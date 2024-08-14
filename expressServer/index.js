const express = require("express")
//path
const path = require("path")
// server initilization
const app = express()

//middleware
//json
app.use(express.json())

// API
app.get("/",(req,res)=>{
    // res.write("hi i am nirmal")
    // res.end()
    // res.send("<h1>HELLO WORLD</h1>")
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/index.css",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","css","index.css"))
})

app.get("/form.js",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","js","form.js"))
})

app.get("/about",(req,res)=>{
    res.send("<h1>this is about page</h1>")
})

app.get("/getStudent",(req,res)=>{
    let student={
        name:"nirmal",
        age:25,
        address:"hyderabad"
    }
    //res.send(student)
    res.json(student)
})

app.post("/postData",(req,res)=>{
    console.log(req.body)
    // to get the body data 
    // console.log(req.header)
    // to get all headers
    let student=req.body
    res.send({message:"data recieved"})
})

// listen to the PORT and hostname
app.listen(2000,"127.0.0.7",()=>{
    console.log("server is starting at http://127.0.0.7:2000");
})

//global variable
console.log(__dirname);
console.log(__filename);

