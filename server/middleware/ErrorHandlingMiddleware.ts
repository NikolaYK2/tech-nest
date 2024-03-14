import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import ApiError from "../error/ApiError";

const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({message: err.message});
  }
  return res.status(500).json({message: 'непредвиденная ошибка'});
}

export default errorHandler;
