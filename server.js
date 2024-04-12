import express from'express'
let app= express()
import routers from "./src/modules/user/user.routers.js"
import { dbconnection } from './DB/connection.js';

app.use(express.json())

app.use(routers)


dbconnection()



app.listen(3000,()=>{
    console.log('server is running.....................')
})