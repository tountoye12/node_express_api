import express from 'express';

import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js'


const PORT = 5000;

const app = express();

app.use(bodyParser.json());


app.use('/users', usersRoutes)


app.get('/', (req, res) => res.send("Hello"))


app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))