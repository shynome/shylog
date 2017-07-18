import './tools'
import { Router,static as staticMiddleware } from "express";
export const router = Router()
//default local set
router.use((req,res,next)=>{
  res.locals.lang="zh-hms-cn"
  next()
})
//config requirejs config
import { requirejsConfig } from "express-tsx";
const min = !dev?'.min':''
const local = dev?'/node_modules':'https://unpkg.com'
dev && router.use(local,staticMiddleware(__dirname+local,{ maxAge:15*24*60*60 }))
requirejsConfig({
  paths:{
    'requirejs'         :local+'/requirejs/require.js#',
    'glamor'            :local+'/glamor/umd/index'/* +min */,
    'glamorous'         :local+'/glamorous/dist/glamorous.umd'+min,
    'react'             :local+'/react/dist/react'+min,
    'react-dom'         :local+'/react-dom/dist/react-dom'+min,
    'antd'              :local+'/antd/dist/antd'+min,
  },
  shim:{
    'antd'              :{ deps:['css!antd'], }
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
//db
import { router as db } from "./db";
router.use(db)
//manger
import { server as manager } from "./manager";
router.use('/manager',manager)
//user
import { server as user } from "./user";
router.use('/user',user)
//server
import { server as shylog } from "./shylog";
router.use('/',shylog)