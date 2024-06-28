import express from 'express';

import bodyParser from 'body-parser';


const PORT = 5000;

const app = express();

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))