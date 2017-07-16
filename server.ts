import express = require('express')
export const server = express()
export const PORT = process.env.PORT || 8000
server.listen(PORT,function(){ console.log(`server is running on ${this.address().port}`) })
//add express-tsx middleware
import { middleware as express_tsx_middleware } from "express-tsx";
server.use(express_tsx_middleware)
//add dynamic router 
import { router } from "./";
server.use(router)