import { expressTsx } from "express-tsx";
export const server = expressTsx(__dirname)
//set collection
server.use(n(async(req,res,next)=>{
  //code
}))
//router
server.get('/',(req,res)=>res.render('./views/index.tsx'))

server.use(async(req,res,next)=>{
  next()
})
