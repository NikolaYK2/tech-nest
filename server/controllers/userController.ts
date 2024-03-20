import {NextFunction, Request, Response} from 'express';
import ApiError from "../error/ApiError";
import models from '../models/models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import checkSecretKey from "../utils/checkSecretKey";

const generateJWT = (id: number, email: string, role: string) => {
  const secretKey = checkSecretKey();
  return jwt.sign({id, email, role}, secretKey, {expiresIn: '24h'});
}

class UserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    const {email, password, role} = req.body;
    if (!email || !password) {//Если неправильный ввод данных
      return next(ApiError.badRequest('not correct email or password!'))
    }
    //Есть ли пользователь в систему
    const candidate = await models.User.findOne({where: {email}});
    if (candidate) {//есл пользователь не пустой
      return next(ApiError.badRequest('пользователь с таким email существует'))
    }
    //если фактически все ок, хэшируем пароль и creat new user
    const hashPassword = await bcrypt.hash(password, 5)//первым пр пароль пользователя 2-сколько раз хэшируем
    //creat user
    const user = await models.User.create({email, role, password: hashPassword});

    //creat basket for user
    const basket = await models.Basket.create({userId: user.id});
    //генерациа веб токен
    //1-..., 2- параметром передается секретный ключ; 3-принимает опции {жизнь токена}
    const token = generateJWT(user.id, user.email, user.role);
    return res.json({token});
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const {email, password} = req.body;
//пользователь уже существует, ищем
    const user = await models.User.findOne({where: {email}});
    if (!user) {//если не найден
      return next(ApiError.badRequest('not user!'))
    }
    //проверка на совпадения пароля
    let comparePassword = bcrypt.compareSync(password, user.password); //сравниваем пароли
    if (!comparePassword){
      return next(ApiError.badRequest('password not верный!'));
    }
    //generate token
    const token = generateJWT(user.id, user.email, user.role);
    return res.json({token});
  }

  async check(req: Request, res: Response, next: NextFunction) {
    const {id} = req.query

    if (!id) {
      return next(ApiError.badRequest('not back ID'))
    }
    res.json(id)
  }
}

export default new UserController()

