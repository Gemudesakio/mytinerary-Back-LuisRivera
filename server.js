import express from 'express'
import 'dotenv/config.js'
import './config/database.js'
import cors from 'cors'
import morgan from 'morgan'
import routerIndex from './router/index.js'
import error_handler from './middlewares/error_handler.js'
import not_fount_handler from './middlewares/not_fount_handler.js'
import error_400 from './middlewares/error_400.js'



const server = express()
const port = process.env.PORT || 8080
const ready = ()=>console.log("server is ready in port: "+port)



//configuracion basica de un servidor en express
server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.use(cors())
server.use(morgan('dev'))

//router
server.use('/api', routerIndex)
//middlewares
server.use(not_fount_handler)
server.use(error_400)
server.use(error_handler)


//finalmente escuchamos el servidor en el puerto
server.listen(port,ready)
