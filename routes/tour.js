import express from 'express'
import {createTour, updateTour,deleteTour,getSingleTour, getTourBySearch, getFeaturedTour, getTourCount,getAllTourPage} from '../controllers/Tourcontroller.js'
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

// Create new Tour
router.post('/', createTour);

router.patch('/:id', verifyAdmin, updateTour);

router.delete('/:id', verifyAdmin, deleteTour);

// router.get('/',getAllTour);

router.get('/:id',getSingleTour);

router.get('/',getAllTourPage);

router.get('/search/getTourBySearch',getTourBySearch);

router.get('/search/getFeaturedTour',getFeaturedTour)

router.get('/search/getTourCount',getTourCount);

export default router;