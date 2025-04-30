import User from "../../models/User.js";

let deleteOne = async (req,res,next)=>{
    try {
        let destroyed = await User.deleteOne({_id: req.params.id}) 
        return res.status(200).json({
        success:true,
        response:destroyed
        })
    } catch (error) {
        next(error)
    }
}

let deleteMany = async (req,res,next)=>{
    try {
        let names = req.body
        let destroyed = await User.deleteMany({name: {$in: names}}) 
        return res.status(200).json({
        success:true,
        response:destroyed
        })
    } catch (error) {
        next(error)
    }
}

let deleteById = async (req,res,next)=>{
    try {
        let destroyed = await User.findByIdAndDelete({_id: req.params.id}) 
        return res.status(200).json({
        success:true,
        response:destroyed
        })
    } catch (error) {
        next(error)
    }
}


export {deleteById,deleteMany,deleteOne}