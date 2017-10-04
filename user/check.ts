import { Router,Request } from "express";
import { RouterRule } from "./";
export const check = Router()
function check_req_required_name(req:Request,required_names:string[]){
  let miss_val = []
  for(let required_name of required_names){
    if(!req.body[required_name]){
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
check.use(async(req,res,next)=>{
  try{
    let username = req.body['username']
    let password = req.body['password']
    let password_confirm = req.body['password_confirm']
    //check required name
    switch(true){
      case req.path.indexOf(RouterRule.sign)===0:
        await check_req_required_name(req,['username','password','password_confirm'])
        await check_passord(password)
        if( password_confirm !== password ){
          throw { err:'password and password_confirm is different', position:'[name=password_confirm]' }
        }
        break
      case req.path.indexOf(RouterRule.login)===0:
        await check_req_required_name(req,['username','password'])
        await check_passord(password)
        break
    }
    next()
  }catch(err){
    res.jsonp(err)
  }
})