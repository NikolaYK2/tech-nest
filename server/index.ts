import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import sequelize from './db'
import models from './models/models'
// const models = require('./models/models')
import cors from 'cors'
import fileUpload from 'express-fileupload'
import router from "./routes/index";
import errorHandler from "./middleware/ErrorHandlingMiddleware";//импорт Обязтельно должен быть идти в конце
import path from 'path';

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
//указываем что файлы из папки static раздаем как статику
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}));//{}- Обьект с опциями

//подключение роутеры
app.use('/api', router);
//Обработка ошибок, на нем работа прекращается
app.use(errorHandler);

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

