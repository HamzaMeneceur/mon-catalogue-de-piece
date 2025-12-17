import 'dotenv/config';

import express from 'express';
import router from './app/index.js';
const app = express();

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/',router)

app.listen(PORT, () => {
    console.log(`listen here : http://localhost:${PORT}`)
})

export default app