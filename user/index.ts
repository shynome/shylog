import { Request } from "express";
import { expressTsx } from "express-tsx";
export const server = expressTsx(__dirname)
//parse form body
import { urlencoded } from "body-parser";
server.use(urlencoded())
//set collection
server.use(async(req,res,next)=>{
  req.collection = req.db.collection('user')
  next()
})
//router rules
export const enum RouterRule {
  porfile='/profile',
  home='/',
  sign='/sign',
  login='/login'
}
//login state check
declare module 'http' { interface IncomingMessage{ user:any } }
server.use(async(req,res,next)=>{
  next()
})
server.get(RouterRule.home,(req,res)=>{
  if(!req.user){
    res.render('./views/login.tsx',{ title:'login or sign' })
    return
  }else{
    res.redirect('./profile')
  }
})
server.get(RouterRule.porfile,(req,res)=>res.render('./views/profile.tsx',{ title:'user center' }))
//check
import { check } from "./check";
server.use(check)
//slat
import { createHmac } from "crypto";
const secret =`shylog -- secret`
server.use((req,res,next)=>{
  req.body['password'] = createHmac('sha256',secret).update(req.body['password']).digest('hex')
  next()
})
//sign up
server.post(RouterRule.sign,async(req,res,next)=>{
  let username = req.body['username']
  let password = req.body['password']
  //check whether the user name has been registered
  let users = await req.collection.findOne({ username })
  if(users.length){
    throw { err:'the user name has been registered', position:'[name=username]' }
  }
  await req.collection.insertOne({ username, password })
  res.jsonp({ err:null, msg:`${username} registration success` })
})
//login in
interface Token { genetate_time:number, value:string, }
server.post(RouterRule.login,async(req,res)=>{
  res.end(`xxxxxxxxxx`)
  return
  let username = req.body['username']
  let password = req.body['password']
  let users = await req.collection.findOne({ username, password })
  if(!users.length){
    throw { err:'username or password is error', position:'[name=username],[name=password]' }
  }
  let [user] = users
  let tokens:Token[] = user.tokens
  //update token
  let now = Date.now()
  tokens = tokens.filter(({ genetate_time })=>genetate_time+100000>now)
  tokens.push({
    genetate_time:Date.now(),
    value:'',
  })
  req.collection.updateOne(user._id,{ tokens })
  let token = true
  res.cookie('username',username,{ httpOnly:true })
  res.cookie('token',token,{ httpOnly:true })
})