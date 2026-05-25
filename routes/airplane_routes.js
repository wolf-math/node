import express from 'express';
const router = express.Router();

import { getAirplane } from '../controllers/airplane_controller.js';

router.get('/:airplane', getAirplane);

export default router;
