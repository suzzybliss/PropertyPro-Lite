import express from 'express';
import { signUp } from '../../controllers/auth';
import multer from '../../middlewares/multer';

const router = express.Router();

router.post('/', multer.single('image_url'), signUp);
router.get('/', (req, res) => {
  res.send('auth ready');
});

export default router;
