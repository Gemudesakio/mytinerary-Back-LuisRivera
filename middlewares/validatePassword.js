import User from "../models/User.js";
import bcrypt from "bcryptjs";


export default async (req,res,next)=>{
    try {
        const {email, password} = req.body
        
        const user = await User.findOne({ email });
        
        
        const isPaswordValid = await bcrypt.compare(password, user.password)
         if(!isPaswordValid){
            return res.status(400).json({
                success: true,
                message: "invalit password"
            })
         }
         next()
    } catch (error) {
        next(error)
    }
}