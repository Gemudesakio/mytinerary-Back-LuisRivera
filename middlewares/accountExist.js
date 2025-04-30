import User from "../models/User.js";

export default async (req,res,next)=>{
    try {
        let mail = req.body.email
        let account = await User.findOne({email: mail})
        if(account){
            return res.status(200).json({
                success:true,
                message: "An account with this email already exists"
            })
        }
        next()
    } catch (error) {
        next(error)
    }
}