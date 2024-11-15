const express = require("express");
const multer = require("multer");
//rest object
const app = express(); //express initialization

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"./images")
    },
    filename : (req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload = multer({ storage })
// const upload = multer(); //multer initialization

const PORT = 8080;
const hostname = "127.0.0.1";

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//API
app.get("/", (req, res) => {
    res.send("hello page");
  });

//post method(json data)  //uses json() middleware

app.post("/json", (req, res) => {
  res.send(req.body);
});

//post method(url data)   //uses urlencoded() middleware
app.post("/url", (req, res) => {
  res.send(req.body);
});

//get method(form data) //uses multer() middleware
app.post("/form", upload.none(), (req, res) => {
  //uploading form data without any file
  res.send(req.body);
});

app.post("/file",upload.single("image"),(req,res)=>{
    res.send(req.file)
})


//LISTEN
app.listen(PORT, hostname, () => {
  console.log(`server running at http://${hostname}:${PORT}`);
});