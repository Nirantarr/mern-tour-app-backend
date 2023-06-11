import express from 'express'
import {createTour, updateTour,deleteTour,getAllTour,getSingleTour, getTourBySearch, getFeaturedTour, getTourCount} from '../controllers/Tourcontroller.js'

const router = express.Router();

// Create new Tour
router.post('/',createTour);

router.patch('/:id',updateTour);

router.delete('/:id',deleteTour);

router.get('/',getAllTour);

router.get('/:id',getSingleTour);

router.get('/search/getTourBySearch',getTourBySearch);

router.get('/search/getFeaturedTour',getFeaturedTour)

router.get('/search/getTourCount',getTourCount);

export default router;