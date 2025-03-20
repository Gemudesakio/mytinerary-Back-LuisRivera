import express from 'express'
import 'dotenv/config.js'
import './config/database.js'
import cors from 'cors'
import morgan from 'morgan'


const server = express()
const port = process.env.PORT || 8080
const ready = ()=>console.log("server is ready in port: "+port)



//configuracion basica de un servidor en express
server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.use(cors())
server.use(morgan('dev'))


//middlewares


//finalmente escuchamos el servidor en el puerto
server.listen(port,ready)
