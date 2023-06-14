
import express from 'express';
import { CreateUser, DeleteUser, GetAllUser, GetSingleUser, UpdateUser } from "../controllers/Usercontroller.js";
import { verifyuser,verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

router.post('/',CreateUser);
router.delete('/:id',verifyuser,DeleteUser);
router.patch('/:id',verifyuser, UpdateUser);
router.get('/:id',verifyuser,GetSingleUser);
router.get('/',GetAllUser);

export default router;