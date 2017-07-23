import { expressTsx } from "express-tsx";
export const server = expressTsx(__dirname)
//router
server.get('/',(req,res)=>res.render('./views/index.tsx'))