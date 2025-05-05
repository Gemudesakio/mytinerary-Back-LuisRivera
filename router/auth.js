import { Router } from "express";
import sigIn from '../controllers/auth/sigIn.js'
import validatorSchema from "../middlewares/validatosSchemas.js";
import schemaSigIn from "../shemas/auth/sigIn.js"
import accountNotExist from "../middlewares/accountNotExist.js";
import validatePassword from "../middlewares/validatePassword.js";
import generateToken from "../middlewares/generateToken.js";
import schemaSigOut from "../shemas/auth/sigOut.js"
import sigOut from "../controllers/auth/sigOut.js";
import passport from "../middlewares/passport.js";
import validateToken from "../middlewares/validateToken.js";

let routerAuth = Router()
routerAuth.post('/sigIn',validatorSchema(schemaSigIn),accountNotExist,validatePassword,generateToken,sigIn)
routerAuth.post('/sigOut',passport.authenticate('jwt',{session: false}),sigOut)
routerAuth.get('/validateToken',passport.authenticate('jwt',{session:false}),validateToken)

export default routerAuth
