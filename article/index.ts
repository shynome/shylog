import { render,expressTsx } from "express-tsx";
export const server = expressTsx(__dirname)
import { Router } from "express";
export const router = Router()

router.get('/',(req,res)=>res.render('./views/index.tsx'))