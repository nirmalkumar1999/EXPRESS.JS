const express = require("express");

const app = express();


//...middleware...

app.use(() => {
  console.log("hi");
});

app.use("/", (req, res, next) => {
  console.log("this is the initial function");
  next();
});

app.use("/", (req, res, next) => {
  console.log("this is the 2nd function");
  next();
});

function thirdMid(req, res,next) {
  console.log("this is the 3rd function");
  next();
}

app.get("/", thirdMid, (req, res) => {
  console.log("this is the last function");
  res.send("this is the last function ");
});



  // ...Router-level middleware...

  let userRouter = express.Router()

  let studentRouter = express.Router()

  app.use("/user", userRouter)  // user router

  app.use("/student", studentRouter)  // student router

  userRouter.get("/",(req,res)=>{
    console.log("user");
    res.send("this is a user router get method")
  })

  userRouter.get("/address",(req,res)=>{
    console.log("this is address API")
    res.send({address:"hyderabad"})
  })

  studentRouter.get("/",(req,res)=>{
    console.log("student")
    res.send("this is from student router")
  })

  studentRouter.get("/about",(req,res)=>{
    console.log("student info")
    res.send([
      {name:"NIRMAL",address:"BHADRACHALAM"},
      {mobile:8919598370,email:"nirmalchundru@gmail.com"}
    ])
  })



  // ...Error-handling middleware...

  // app.use((err,req,res,next)=>{
  //   // to handel error
  //   res.send(err.message)
  // })

  // app.get("/",(req,res)=>{
  //   throw new Error("cannot process rignt now")
  // })




app.listen(3000, "127.0.0.3", () => {
  console.log("server running at http://127.0.0.3:3000");
});
