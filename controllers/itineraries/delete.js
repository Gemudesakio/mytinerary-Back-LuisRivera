import Itinerary from "../../models/Itinerary.js";

let deleteOne = async (req, res, next) =>{
    try {
        let destroyed = await Itinerary.deleteOne({ _id: req.params.idParams });
        return res.status(200).json({ response: destroyed })
    } catch (error) {
        next(error);
        
    }
}

let deleteMany = async (req, res, next) => {
    try {
        const titles = req.body.titles; 
        let destroyed = await Itinerary.deleteMany({ title: { $in: titles } });
        return res.status(200).json({ success: true, response: destroyed });
    } catch (error) {
        next(error);
    }
};

let deleteById = async (req, res, next) => {
    try {
    let idQuery = req.params.idParams;
    let deleted = await Itinerary.findByIdAndDelete(idQuery);
    return res.status(200).json({
        success: true,
        message: "Itinerary deleted",
        itinerary: deleted,
    });
} catch (error) {
    next(error);
}
}

export { deleteOne, deleteMany, deleteById };