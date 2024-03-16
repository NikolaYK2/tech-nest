import {Request, Response} from 'express';
import uuid from 'uuid'

class DeviceController {
  async create(req: Request, res: Response) {
//получем данные из тела запроса
    const {name, price, brandId, typeId, info} = req.body;
    let img;
    if (req.files && 'img' in req.files) {
      img = req.files.img;
    }
    let fileName = uuid.v4() + ".jpg"
  }

  async getAll(req: Request, res: Response) {

  }

  async getOne(req: Request, res: Response) {

  }

}

export default new DeviceController()
