import { getPartners, createBayers } from "../controllers/partnerController";
import { Router } from "express";


const router = Router();


// Маршруты для покупателей

// Добавить покупателя POST /api/partners/bayers
router.post('/bayers', createBayers);

// Получить всех покупателей GET /api/partners/bayers
router.get('/', getPartners);

export default router;