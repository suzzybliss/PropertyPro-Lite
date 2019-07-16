import express from 'express';
import auth from '../../middlewares/authenticator';
import { newProperty } from '../../controllers/property';
import multer from '../../middlewares/multer';

const router = express.Router();

router.post('/', [auth, multer.single('image_url')], newProperty)

export default router;