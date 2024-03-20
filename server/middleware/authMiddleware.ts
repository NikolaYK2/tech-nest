//декодирование токена и проверка на валидность
import {NextFunction, Request, Response} from "express";
import jwt, {JwtPayload} from 'jsonwebtoken'
import checkSecretKey from "../utils/checkSecretKey";

interface RequestWithUser extends Request {
  user?: string | JwtPayload;
}

const authMiddleware = (req: RequestWithUser, res: Response, next: NextFunction) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({message: 'not authorization!'})
    }
    const secretKey = checkSecretKey();
    const decoded = jwt.verify(token, secretKey);//проверка token validation
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({message: 'not authorization!'})
  }
}

export default authMiddleware;
