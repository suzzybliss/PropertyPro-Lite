import express from 'express';
import 'dotenv/config';
import './config/cloudinary';
import v1Routes from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', v1Routes);

app.get('/', (req, res) => {
  res.send('server working');
});

export default app;
