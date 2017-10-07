import express = require('express')
import 'express-async-errors'
export const server = express()
export const PORT = process.env.PORT || 8000
export const server_listen_port = new Promise((rl,rj)=>{
  (server as any).once('error',rj)
  server.listen(PORT,function(){
    let port = this.address().port
    console.log(`server is running on ${port}`)
    rl(port)
  })
})
//add express-tsx middleware
import { middleware as express_tsx_middleware } from "express-tsx";
server.use(express_tsx_middleware)
//add dynamic router 
import { router } from "./";
server.use(router)

//handle error
let errorHnadler = (err:Error)=>console.error(err && err.stack || err)
process.on('uncaughtException',errorHnadler)
process.on('unhandledRejection',errorHnadler)