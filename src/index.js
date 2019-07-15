import app from './app';

const port = process.env.PORT || 5008;

const server = app.listen(port, () => console.log(`server is live at ${port}`));
export default server;
