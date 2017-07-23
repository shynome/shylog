import { render,expressTsx } from "express-tsx";
export const server = expressTsx(__dirname)

server.get('/',(req,res)=>res.render('./views/index.tsx'))