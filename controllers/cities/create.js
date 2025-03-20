import City from "../../models/City.js";

let createOne = async (req, res, next) => {
    try {
        let dataCity = req.body;
        let newCity = await City.create(dataCity);
        return res.status(201).json({
            success: true,
            message: "City created successfully",
            city: newCity
        });
    } catch (error) {
        next(error);
    }
}



let createAny = async (req, res, next) => {
    try {
        let dataCities = req.body;
        let newCities = await City.insertMany(dataCities);
        return res.status(201).json({
            success: true,
            message: `${newCities.length} cities created successfully`,
            cities: newCities
        });
    } catch (error) {
        next(error);
    }
}


export {createOne, createAny}