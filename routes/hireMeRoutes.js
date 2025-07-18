import express from 'express';
import { createHireMe, getAllHires } from '../controllers/hireMeController.js';

const router = express.Router();

router.post('/', createHireMe);
router.get('/', getAllHires);

export default router;
