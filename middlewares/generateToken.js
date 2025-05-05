
import jwt from "jsonwebtoken";

export default async (req,res,next)=>{
    try {
        let {email, role} = req.user
        let token = jwt.sign(
            {email, role},
            process.env.SECRET,{expiresIn: '1h'})
        req.token = token
        next()
    } catch (error) {
        next(error)
    }
}