import { Router } from "express";
export const router = Router()

import { server as shylog } from "./shylog";
router.use('/',shylog)