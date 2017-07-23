import './tools'
import { Router,static as staticMiddleware } from "express";
export const router = Router()
//default local set
router.use(next_auto((req,res)=>{
  res.locals.lang="zh-hms-cn"
}))
//node_modules_static_server
import { router as node_modules_static_server } from './requirejs.config'
router.use(node_modules_static_server)
//redirect to /
router.use((req,res,next)=>{
  if(0
    ||  Object.keys(req.query).length
    ||  /\/$/.test(req.originalUrl)
  ){
    next()
    return
  }
  res.redirect(req.originalUrl+'/')
})
//db
import { router as db } from "./db";
router.use(db)
//manger
import { server as manager } from "./manager";
router.use('/manager',manager)
//user
import { server as user } from "./user";
router.use('/user',user)
//shylog
import { server as shylog } from "./shylog";
router.use('/',shylog)