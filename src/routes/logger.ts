import { Router } from "express";
import { createLog } from "../controller/loggerController";



const router = Router();


router.post("/logger", createLog);

export default router;