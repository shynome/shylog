import { MongoClient,Db,Collection } from "mongodb";
export let mongodb_url = process.env.mongodb_url || `mongodb://root:zxcvgf@web-shard-00-00-ehvyy.mongodb.net:27017,web-shard-00-01-ehvyy.mongodb.net:27017,web-shard-00-02-ehvyy.mongodb.net:27017/web?ssl=true&replicaSet=web-shard-0&authSource=admin`
export const db_client = MongoClient.connect(mongodb_url).then((db)=>(console.log(`mongodb link successful`),db))
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
router.use(async(req,res,next)=>{
  (req as any).db = await db_client
  next()
})