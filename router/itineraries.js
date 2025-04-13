import { Router } from "express";
import { getAll, getById, getByCity} from "../controllers/itineraries/read.js";

let routerItineraries = Router()

routerItineraries.get('/all', getAll)
routerItineraries.get('/id/:idParams', getById)
routerItineraries.get('/city/:cityIdParams', getByCity)

export default routerItineraries