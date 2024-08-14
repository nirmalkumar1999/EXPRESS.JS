// console.log("hi how are you")

const sendBtn = document.getElementById("send")

let data = {id:10,name:"nirmal",age:25,address:"hydrabad"}

sendBtn.addEventListener("click",async()=>{
    try{
        let response = await fetch("/send",{
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        let  res = await response.json()
        console.log(res)
    }
    catch{
        console.log(err)
    }
})

let getBtn = document.getElementById("get")

getBtn.addEventListener("click",async()=>{
    try{
        let response = await fetch("/getdata")
        let data =await response.json()
        console.log(data)
    }
    catch{
        console.log(err)
    }
})