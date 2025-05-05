import User from "../models/User.js";

export default async (req,res,next)=>{
 try {
    let mail = req.body.email
    let account = await User.findOne({email: mail})
    if(!account){
        return res.status(400).json({
            success: true,
            message:"account not exist"
        })
    }
   req.user = {
    name: account.name,
    email: account.email,
    role: account.role,
    online: account.online
   }
   console.log("user creado por mi");
   
   console.log(req.user);
   
   
   
  
   
    next()
   
 } catch (error) {
    next(error)
 }
}


