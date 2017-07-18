import { MongoClient,Db,Collection } from "mongodb";
export const db_client = MongoClient.connect('mongodb://127.0.0.1')
import { Router } from "express";
export const router = Router()
declare global {
  namespace Express {
    interface Request {
      db:Db
      collection:Collection
    }
  }
}
router.use(next_auto(async(req,res)=>{
  req.db = await db_client
}))