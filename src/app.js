
import express from 'express';


const app = express();

app.use(express.json());




app.get('/', (req, res) => {
    res.send('server working')
});



const port = process.env.PORT || 5008;

app.listen(port, () => console.log(`server is live at ${port}`));