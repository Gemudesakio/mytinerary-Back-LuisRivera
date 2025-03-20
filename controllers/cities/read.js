import City from '../../models/City.js'


let getAll = async (req,res,next)=>{
try {
    let all = await City.find()
    return res.status(200).json({
        success:true,
        Cities:all
    })
} catch (error) {
    next(error)
}
}

let getById = async (req,res,next)=>{
    try {
        let idQuery = req.params.idParams
        let all = await City.findById(idQuery)
        return res.status(200).json({
            success:true,
            Cities:all
        })
    } catch (error) {
        next(error)
    }
    }

export {getAll, getById}
