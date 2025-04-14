import Itinerary from "../../models/Itinerary.js";

let createOne = async (req, res, next) => {
    try {
        let dataItinerary = req.body;
        let newItinerary = await Itinerary.create(dataItinerary);
        return res.status(201).json({
            success: true,
            itinerary: newItinerary,
        });

    } catch (error) {
        next(error);
        
    }
}

let createMany = async (req, res, next) => {
    try {
        let dataItinerary = req.body;
        let newItinerary =  await Itinerary.insertMany(dataItinerary);
        return res.status(201).json({
            success: true,
            itinerary: newItinerary,
        });

    } catch (error) {
        next(error);
        
    }
}

export { createOne, createMany };
// export default createOne