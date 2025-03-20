import { Router } from "express";
import { getAll, getById } from "../controllers/cities/read.js";
import { createOne, createAny } from "../controllers/cities/create.js";

let routerCities = Router()

routerCities.get('/all', getAll)
routerCities.get('/id/:idParams', getById)

routerCities.post('/createOne', createOne)
routerCities.post('/createAny', createAny)

export default routerCities
