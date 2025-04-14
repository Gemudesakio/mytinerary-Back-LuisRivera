import { Router } from "express";
import { getAll, getById, getByCity,getComments} from "../controllers/itineraries/read.js";
import {createOne, createMany} from "../controllers/itineraries/create.js"
import {deleteOne, deleteById, deleteMany} from "../controllers/itineraries/delete.js"
import {updateOne, updateById, updateMany} from "../controllers/itineraries/update.js"

let routerItineraries = Router()

routerItineraries.get('/all', getAll)
routerItineraries.get('/id/:idParams', getById)
routerItineraries.get('/city/:cityIdParams', getByCity)
routerItineraries.get('/comments/:id', getComments)
routerItineraries.post('/create', createOne)
routerItineraries.post('/createMany', createMany)
routerItineraries.delete('/delete/:idParams', deleteOne)
routerItineraries.delete('/deleteMany', deleteMany)
routerItineraries.delete('/deleteById/:idParams', deleteById)
routerItineraries.put('/update', updateOne)
routerItineraries.put('/updateMany', updateMany)
routerItineraries.put('/updateById/:idParams', updateById)

export default routerItineraries