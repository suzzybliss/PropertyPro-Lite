import express from 'express';
import auth from '../../middlewares/authenticator';
import { newProperty, getAllProperty, getProperty, markPropertyAsSold, removeProprty, updateProperty } from '../../controllers/property';
import multer from '../../middlewares/multer';

const router = express.Router();

router.post('/', [auth, multer.single('image_url')], newProperty);
router.get('/', getAllProperty);
router.get('/:property_id', getProperty)
router.patch('/:property_id/sold', auth, markPropertyAsSold);
router.delete('/:property_id', auth, removeProprty);
router.patch('/:property_id', auth, updateProperty);

export default router;