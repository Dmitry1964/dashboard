import { createBayers } from "../controllers/partnerController";
import { Router } from "express";


const router = Router();

router.use('/bayers', createBayers);

export default router;