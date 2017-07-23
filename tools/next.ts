import { RequestHandler,Request,Response } from "express";
export type next = (handler:RequestHandler)=>RequestHandler
export const next:next =  
(handler:RequestHandler):RequestHandler=>
(req,res,next)=>
new Promise(async (resolve,reject)=>{
  let next_wrapper = (error?:any)=>(error?resolve:reject)(error)
  await handler(req,res,next_wrapper)
  next_wrapper()
})
.then(
  ()=>next(),
  next
)

declare global { var next_auto:next }
(global as any).next_auto = next