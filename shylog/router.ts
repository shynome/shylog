import { Router } from "express";
export const router = Router()

router.use((req,res,next)=>{
  res.locals.lang = 'zh-hms-cn'
  next()
})

router.get('/',(req,res)=>{
  res.render('./views/index.tsx',{ title:'welcome to shylog' })
})