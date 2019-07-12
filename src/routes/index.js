import express from 'express';

import validator from '../middlewares/validator';
import authenticator from '../middlewares/authenticator';
import users from '../controllers/users';


const router = express.Router();

// auth
router.post('/signup', validator.auth, users.signup);
router.post('/login', validator.auth, users.login);

export default router;