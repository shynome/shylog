import { Router } from "express";
export const router = Router()

import { server as article } from "../article";
router.use('/article',article)

router.use('/',(req,res)=>res.render('./views/index.tsx'))