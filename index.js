// server.js
import express from 'express';
import bodyParser from 'body-parser';
import Property from './src/controllers/Property';

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log(`URL: ${request.url}`);
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
});

app.post('/api/v1/properties', Property.create);
app.get('/api/v1/properties', Property.getAll);
app.get('/api/v1/properties/:id', Property.getOne);
app.patch('/api/v1/properties/:id', Property.update);
app.delete('/api/v1/properties/:id', Property.delete);


app.listen(3008)
console.log('app running on port ', 3008);