import express from 'express'
import { Createbooking,GetSingleBooking,GetAllBooking } from '../controllers/bookingController.js'
import { verifyuser ,verifyAdmin} from '../utils/verifyToken.js';

const router = express.Router();

router.post('/',verifyuser,Createbooking);
router.get('/:id',verifyuser,GetSingleBooking);
router.get('/',verifyAdmin,GetAllBooking);

export default router;