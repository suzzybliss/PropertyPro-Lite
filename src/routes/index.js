import express from 'express';
import auth from './auth';
import property from './property';
import app from '../app';
// import validator from '../middlewares/validator';
// import authenticator from '../middlewares/authenticator';
// import users from '../controllers/users';

const routes = express.Router();

routes.use('/auth', auth);
routes.use('/property', property);
// auth
// router.post('/signup', validator.auth, users.signup);
// router.post('/login', validator.auth, users.login);

// Create property
// router.post('/property', authenticator, validator.property, property.create);

// Get all property
// router.get('/property', authenticator, property.findAll);

export default routes;
