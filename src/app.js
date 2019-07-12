import '@babel/polyfill';
import express from 'express';
import cookieParser from 'cookie-parser';

import v1Router from './routes';

const app = express();

app.use(express.json());
app.use('/api/v1', v1Router);



app.get('/', (req, res) => {
    res.send('Hello World')
});



const port = process.env.PORT || 5008;

app.listen(port, () => console.log(`server is live at ${port}`));

exports.closeServer = function(){
    server.close();
  };