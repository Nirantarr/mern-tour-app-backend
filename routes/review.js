import express from 'express'
import { verifyuser } from '../utils/verifyToken.js';
const router = express.Router();
import { createReview } from '../controllers/ReviewController.js';

router.post('/:tourId',verifyuser,createReview)


export default router;