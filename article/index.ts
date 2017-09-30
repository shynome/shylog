import { render,expressTsx } from "express-tsx";
export const server = expressTsx(__dirname)
//注入 collection
server.use((req,res,next)=>{
  req.collection = req.db.collection('articles')
  next()
})

server.get('/',(req,res)=>res.render('./views/index.tsx'))