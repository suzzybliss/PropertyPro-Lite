import express from 'express';
import swaggerUi from 'swagger-ui-express';
import 'dotenv/config';
import './config/cloudinary';
import v1Routes from './routes';
import apiDoc from './doc/swagger.json';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', v1Routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDoc));

app.get('/', (req, res) => {
  res.redirect('/docs');
});

export default app;
