import { expressTsx } from "express-tsx";
export const router = expressTsx(__dirname)
router.use((req,res)=>res.render('./push.tsx'))