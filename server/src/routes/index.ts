import { Router } from 'express';
import userRoutes from './userRoutes';
import authRoutes from './authRoutes';

const router = Router();

// Основной маршрут для проверки API
router.get('/', (req, res) => {
  res.json({
    message: '🚀 API работает!',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Подключаем маршруты
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

export default router;
