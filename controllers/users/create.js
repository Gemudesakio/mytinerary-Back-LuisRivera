import User from "../../models/User.js";

let createOne = async (req,res,next)=>{
    try {
        let userData = req.body;
        let newUser = await User.create(userData)
        return res.status(201).json({
            success:true,
            response: newUser
        })

    } catch (error) {
        next(error);
    }
}

let createMany = async (req,res,next)=>{
    try {
        let userData = req.body;
        let newUser = await User.insertMany(userData)
        return res.status(201).json({
            success:true,
            response: newUser
        })

    } catch (error) {
        next(error);
    }
}

export {createOne, createMany}
