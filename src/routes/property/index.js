import express from 'express';
import auth from '../../middlewares/authenticator';
import { newProperty, getAllProperty } from '../../controllers/property';
import multer from '../../middlewares/multer';

const router = express.Router();

router.post('/', [auth, multer.single('image_url')], newProperty)
router.get('/', getAllProperty)

export default router;