import { Router } from "express";
import { getAll, getById } from "../controllers/users/read.js";

let routerUsers = Router()

routerUsers.get('/all', getAll)
routerUsers.get('/id/:idParams', getById)

export default routerUsers