import { Router } from "express";
import { getAll, getById } from "../controllers/users/read.js";
import { createOne, createMany } from "../controllers/users/create.js";
import { updateById,updateMany,updateOne } from "../controllers/users/update.js";   
import { deleteById,deleteMany,deleteOne } from "../controllers/users/delete.js";
import validatorSchema from "../middlewares/validatosSchemas.js";
import schemaRegister from "../shemas/users/create.js";
import accountExist from "../middlewares/accountExist.js";
import createHash from "../middlewares/createHash.js";

let routerUsers = Router()

routerUsers.get('/all', getAll)
routerUsers.get('/id/:idParams', getById)
routerUsers.post('/createOne',validatorSchema(schemaRegister),accountExist, createHash,createOne)
routerUsers.post('createMany',validatorSchema(schemaRegister),createMany)
routerUsers.put('/updateOne',updateOne)
routerUsers.put('/updateMany',updateMany)
routerUsers.put('/updateById/:id',updateById) 
routerUsers.delete('/deleteOne/:id',deleteOne)
routerUsers.delete('/deleteMany',deleteMany)
routerUsers.delete('/deleteById/:id',deleteById)

export default routerUsers

