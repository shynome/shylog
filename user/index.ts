import { Request } from "express";
import { expressTsx } from "express-tsx";
export const server = expressTsx(__dirname)
//set collection
server.use(async(req,res,next)=>{
  req.collection = req.db.collection('user')
  next()
})
//router
server.get('/',(req,res)=>res.render('./views/index.tsx'))
//check
function check_req_required_name(req:Request,required_names:string[]){
  let miss_val = []
  for(let required_name of required_names){
    if(!req.params[required_name]){
      miss_val.push({
        err:`${required_name} is required`,
        position:`[name=${required_name}]`
      })
    }
  }
  if(miss_val.length){
    throw miss_val    
  }
}
function check_passord(password:string){
  if(password.length<6){
    throw { err:`password is too short.it can't be shorter than 6`, position:'[name=password]' }
  }
}
import { createHmac } from "crypto";
const secret =`shylog -- secret`
server.post('/',async(req,res,next)=>{
  let username = req.params['username']
  let password = req.params['password']
  let password_confirm = req.params['password_confirm']
  //check required name
  switch(req.path){
    case 'sign':
      await check_req_required_name(req,['username','password','password_confirm'])
      await check_passord(password)
      if( password_confirm !== password ){
        throw { err:'password and password_confirm is different', position:'[name=password_confirm]' }
      }
      break
    case 'login':
      await check_req_required_name(req,['username','password'])
      await check_passord(password)
      break
  }
  //slat
  req.params['password'] = createHmac('sha256',secret).update(req.params['password']).digest('hex')
  next()
})
//sign up
server.post('sign',async(req,res,next)=>{
  let username = req.params['username']
  let password = req.params['password']
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
server.use('login',async(req,res,next)=>{
  let username = req.params['username']
  let password = req.params['password']
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
server.use('/',(req,res)=>res.end(`404`))