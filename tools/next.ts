import { RequestHandler,Request,Response } from "express";
export type middleware_auto_next = (handler:RequestHandler)=>RequestHandler
export const n:middleware_auto_next =  
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

declare global { var n:middleware_auto_next }
(global as any).next_auto = n