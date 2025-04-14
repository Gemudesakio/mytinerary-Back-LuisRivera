import Itinerary from "../../models/Itinerary.js";

let getAll = async (req, res, next) => {
  try {
    let all = await Itinerary.find().populate("city").populate("user").populate("coments.user");
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
    let all = await Itinerary.findById(idQuery).populate("city").populate("user").populate("coments.user")
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
        let all = await Itinerary.find({ city: cityId }).populate("city").populate("user").populate("coments.user")
        return res.status(200).json({
            success: true,
            Itineraries: all,
        });
    } catch (error) {
        next(error);
        
    }
}

let getComments = async (req, res, next) => {
  try {
    const itineraryId = req.params.id;
    const itinerary = await Itinerary.findById(itineraryId).populate("coments.user");
    return res.status(200).json({
      success: true,
      comments: itinerary.coments, //devolvemos unicamente los comentarios 
    });
  } catch (error) {
    next(error);
  }
};



export { getAll, getById, getByCity, getComments };