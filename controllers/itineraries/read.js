import Itinerary from "../../models/Itinerary.js";

let getAll = async (req, res, next) => {
  try {
    let all = await Itinerary.find().populate("city").populate("user");
    return res.status(200).json({
      success: true,
      Itineraries: all,
    });
  } catch (error) {
    next(error);
  }
}

let getById = async (req, res, next) => {
  try {
    let idQuery = req.params.idParams
    let all = await Itinerary.findById(idQuery).populate("city").populate("user")
    return res.status(200).json({
      success: true,
      Itineraries: all,
    });
  } catch (error) {
    next(error);
  }
}

let getByCity = async (req, res, next) => {
    try {
        let cityId = req.params.cityIdParams
        let all = await Itinerary.find({ city: cityId }).populate("city").populate("user")
        return res.status(200).json({
            success: true,
            Itineraries: all,
        });
    } catch (error) {
        next(error);
        
    }
}

export { getAll, getById, getByCity };