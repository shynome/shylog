import { expressTsx } from "express-tsx";
export const server = expressTsx(__dirname)
//default
server.use(/\/$/,(req,res)=>res.render('./views/index.tsx'))
//router
import { server as article } from "../article";
server.use('/article',article)