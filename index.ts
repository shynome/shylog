import { Router,static as staticMiddleware } from "express";
export const router = Router()
//config requirejs config
import { requirejsConfig } from "express-tsx";
const min = !dev?'.min':''
const node_modules = '/node_modules'
router.use(node_modules,staticMiddleware(__dirname+node_modules,{ maxAge:15*24*60*60 }))
requirejsConfig({
  paths:{
    'requirejs'         :'/node_modules/requirejs/require.js#',
    'glamor'            :'/node_modules/glamor/umd/index'/* +min */,
    'glamorous'         :'/node_modules/glamorous/dist/glamorous.umd'+min,
    'react'             :'/node_modules/react/dist/react'+min,
    'react-dom'         :'/node_modules/react-dom/dist/react-dom'+min,
    'semantic-ui-react' :'/node_modules/semantic-ui-react/dist/umd/semantic-ui-react.min.js'
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