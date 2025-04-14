import User from "../../models/User.js";

let getAll = async (req, res, next) => {
  try {
    let all = await User.find();
    return res.status(200).json({
      success: true,
      Users: all,
    });
  } catch (error) {
    next(error);
  }
}

let getById = async (req, res, next) => {
    try {
        let idQuery = req.params.idParams
        let all = await User.findById(idQuery)
        return res.status(200).json({
            success: true,
            Users: all,
        })
    } catch (error) {
        next(error)
        
    }
}

export { getAll, getById }
