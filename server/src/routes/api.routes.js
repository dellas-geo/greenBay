import express from 'express';
import cors from 'cors';
import userController from '../controller/userController.js'

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/register', userController.post);


export default router;