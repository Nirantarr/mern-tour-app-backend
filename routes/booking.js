import express from 'express'
import { Createbooking,GetSingleBooking,GetAllBooking } from '../controllers/bookingController.js'
import { verifyuser ,verifyAdmin} from '../utils/verifyToken.js';

const router = express.Router();

router.post('/',Createbooking);
router.get('/:id',GetSingleBooking);
router.get('/',GetAllBooking);

export default router;