import express from 'express'
import {createTour, updateTour,deleteTour,getAllTour,getSingleTour, getTourBySearch, getFeaturedTour, getTourCount} from '../controllers/Tourcontroller.js'
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

// Create new Tour
router.post('/',  verifyAdmin, createTour);

router.patch('/:id', verifyAdmin, updateTour);

router.delete('/:id', verifyAdmin, deleteTour);

router.get('/',getAllTour);

router.get('/:id',getSingleTour);

router.get('/search/getTourBySearch',getTourBySearch);

router.get('/search/getFeaturedTour',getFeaturedTour)

router.get('/search/getTourCount',getTourCount);

export default router;