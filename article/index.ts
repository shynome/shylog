import { render,expressTsx } from "express-tsx";
export const server = expressTsx(__dirname)
//注入 collection
server.use(n((req,res)=>{
  req.collection = req.db.collection('articles')
}))

server.get('/',(req,res)=>res.render('./views/index.tsx'))