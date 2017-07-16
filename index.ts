import { Router } from "express";
export const router = Router()
//config requirejs config
import { requirejsConfig } from "express-tsx";
requirejsConfig({
  paths:{
    'antd'      :'//cdn.bootcss.com/antd/2.12.0/antd'+(!dev?'.min':''),
  },
  shim:{
    'antd'      :{ deps:['css!antd'] },
  }
})
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
//user
import { server as user } from "./user";
router.use('/user',user)
//server
import { server as shylog } from "./shylog";
router.use('/',shylog)