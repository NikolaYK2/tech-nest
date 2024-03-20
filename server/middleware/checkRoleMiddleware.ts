import {NextFunction, Request, Response} from "express";
import checkSecretKey from "../utils/checkSecretKey";
import jwt from "jsonwebtoken";


const checkRole = (role: string) => {
  return function (req: Request, res: Response, next: NextFunction) {
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

      if (typeof decoded === 'object' && 'role' in decoded) {
        if (decoded.role !== role) {
          return res.status(403).json({message: 'not доступа!'})
        }
      }

      req.user = decoded;

      next();
    } catch (e) {
      res.status(401).json({message: 'not authorization!'})
    }
  }
}

export default checkRole;
