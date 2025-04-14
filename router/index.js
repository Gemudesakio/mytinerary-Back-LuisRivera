import { Router } from "express";
import routerCities from "./cities.js";
import routerItineraries from "./itineraries.js";
import routerUsers from "./users.js";


let routerIndex = Router()
routerIndex.use('/cities',routerCities)
routerIndex.use('/itineraries',routerItineraries)
routerIndex.use('/users',routerUsers)

export default routerIndex