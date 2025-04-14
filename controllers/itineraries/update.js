import Itinerary from "../../models/Itinerary.js";

let updateOne = async (req, res, next) => {
    try {
       let itineraryInfo = req.body;
       let updateIntinerary = await Itinerary.updateOne(
        {_id: itineraryInfo._id}, //buscamos el id del itinerario
        {title: itineraryInfo.title}, //actualizamos el titulo}
       )

    return res.status(200).json({
        success: true,
        itinerary: updateIntinerary,
    });
    } catch (error) {
        next(error);
        
    }
}

let updateMany = async (req, res, next) => {
    try {
       let itineraryInfo = req.body;
       let updateIntinerary = await Itinerary.updateMany(
        {title: itineraryInfo.title}, //buscamos el id del itinerario
        {price: itineraryInfo.price}, //actualizamos el titulo}
       )

    return res.status(200).json({
        success: true,
        itinerary: updateIntinerary,
    });
    } catch (error) {
        next(error);
        
    }
}

let updateById = async (req, res, next) => {
    try {
       let itineraryInfo = req.body;
       let idQuery = req.params.idParams
       let updateIntinerary = await Itinerary.findByIdAndUpdate(
        idQuery, //buscamos el id del itinerario
        {title: itineraryInfo.title}, 
        { new: true }   //actualizamos el titulo}
       )

    return res.status(200).json({
        success: true,
        itinerary: updateIntinerary,
    });
    } catch (error) {
        next(error);
        
    }
}

export { updateOne, updateMany, updateById };