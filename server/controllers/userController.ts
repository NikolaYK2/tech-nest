import {Request, Response} from 'express';

class UserController {
  async registration(req: Request, res: Response) {

  }

  async login(req: Request, res: Response) {

  }

  async check(req: Request, res: Response) {
    const query = req.query//получаем параметр строки запроса
    res.json(query.id)
      //допустим нужно только id
    const {id} = req.query
    res.json(id)
  }
}

export default new UserController()

