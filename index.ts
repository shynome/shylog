import { Router } from "express";
export const router = Router()
//redirect to /
router.use((req,res,next)=>{
  if(
        Object.keys(req.query).length
    ||  /\/$/.test(req.originalUrl)
  ){
    next()
    return
  }
  res.redirect(req.originalUrl+'/')
})
//manger
import { server as manager } from "./manager";
router.use('/manager',manager)
//server
import { server as shylog } from "./shylog";
router.use('/',shylog)