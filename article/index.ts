import express = require('express')
export const server = express()
//ser view engie
import { render } from "express-tsx";
server.engine('.tsx',render)
server.set('views',__dirname)
server.set('.iew engie','tsx')
//import dynamic router
import { router } from "./router";
server.use(router)