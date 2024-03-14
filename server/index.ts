import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import sequelize from './db'
import models from './models/models'
// const models = require('./models/models')
import cors from 'cors'
import {router} from "./routes/index";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json())
//подключение роутеры
app.use('/api', router)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start();

