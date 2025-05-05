import User from '../../models/User.js';

export default async (req, res,next) => {
    try {
        console.log("user guardado en req.user");
        
        console.log(req.user.email);
        
        let user =await User.findOneAndUpdate(
            {email: req.user.email},
            {online: true}
        )
        return res.status(200).json({
            success: true,
            message: 'User signed in successfully',
            token: req.token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                online: user.online,
                role: user.role
            }
        
    
        })  
     

    } catch (error) {
        next(error)
    }
  
}