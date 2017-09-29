import './tools'
import { Router,static as staticMiddleware } from "express";
export const router = Router()
//default local set
router.use(n((req,res)=>{
  res.locals.lang="zh-hms-cn"
  if( dev ){
    res.locals.hotreload = true
  }
}))
//node_modules_static_server
import { router as node_modules_static_server } from './requirejs.config'
router.use(node_modules_static_server)
router.use('/favicon.ico',(req,res)=>res.sendFile(__dirname+'/favicon.ico'))
//redirect to `/`
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
//todo
import { server as todo } from "./todo";
router.use('/todo',todo)
//shylog
import { server as shylog } from "./shylog";
router.use('/',shylog)