import { expressTsx } from "express-tsx";
export const server = expressTsx(__dirname)
server.use('/',(req,res)=>res.render('./todo.tsx',{ title:'todo mvc' }))