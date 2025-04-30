import User from "../../models/User.js";

let updateOne = async (req,res,next) =>{
    try {
        let userData = req.body
        let userUpdate = User.updateOne(
            {_id: userData._id},
            {   name: userData.name,
                email: userData.email,
                role: userData.role
            }
        )
        return res.status(200).json({
            success: true,
            response: userUpdate
        })
    } catch (error) {
        next(error)
    }
}

let updateMany = async (req,res,next) =>{
    try {
        let userData = req.body
        let userUpdate = User.updateMany(
            {name: userData.oldName},
            {   name: userData.newName,
                email: userData.email,
                role: userData.role
            }
        )
        return res.status(200).json({
            success: true,
            response: userUpdate
        })
    } catch (error) {
        next(error)
    }
}

let updateById = async (req,res,next) =>{
    try {
        let userData = req.body
        let idQuery = req.params.id
        let userUpdate = User.findByIdAndUpdate(
            idQuery,
            {   name: userData.name,
                email: userData.email,
                role: userData.role
            }
        )
        return res.status(200).json({
            success: true,
            response: userUpdate
        })
    } catch (error) {
        next(error)
    }
}



export {updateOne,updateById,updateMany}