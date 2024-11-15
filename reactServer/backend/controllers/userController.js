const {userModel}=require("../models/userModel")
const getallusers=async()=>{
    try{
        const users = await userModel.find()
        return res.status(200).send(users)
    }catch{
        return res.send(500).send({error:"Internal Server Error"})
    }
}

const signup = async() =>{
    try{
        const {username,password} = req.body
        if(!username && !password){
            return res.send(400).send({error:"Provide All Required Fields"})
        }
        else{
            const isUser = await userModel.findOne({username})
            if(isUser){
                return res.send(400).send({error:"User already registred"})
            }
            else{
                const user = new userModel(req.body)
                await user.save()
                return res.send(201).send({message:"user registred successfully"})
            }
        }
    }catch{
        return res.send(500).send({error:"Internal Server Error"})
    }
}

module.exports ={ getallusers,signup}