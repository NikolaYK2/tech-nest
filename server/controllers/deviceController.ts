import {NextFunction, Request, Response} from 'express';
import path from 'path';
import fileUpload from 'express-fileupload';
import models from '../models/models';
import ApiError from "../error/ApiError";
import {v4} from "uuid";


type InfoType={
  title:string,
  description:string,
}
type DeviceModel =  typeof models.Device &{
  id: number;
}
class DeviceController {
  async create(req: Request, res: Response, next: NextFunction) {
//получем данные из тела запроса
    try {
      let {name, price, brandId, typeId, info} = req.body;
      let img;
      if (req.files) {
        img = req.files.img as fileUpload.UploadedFile;
      }
      let fileName = v4() + ".jpg";
      img?.mv(path.resolve(__dirname, "..", "static", fileName));
      //__dirname - путь до текущей папки
      //".." - вернуться надиректорию назад and folder static
      // переместим файл в нужную нам папку

      //create ustroistvo
      const device = await models.Device.create({name, price, brandId, typeId, img: fileName})

      if (info) {
        info = JSON.parse(info);
        info.forEach((i:InfoType) =>
          models.DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: (device as any).id
          })
        )
      }

      return res.json(device);
    } catch (e: any) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req: Request, res: Response) {
    let {brandId, typeId, limit, page} = req.query;
    //указываем дефолтые значения постраничного вывода
    page = page || '1';
    limit = limit || '9';
    let numPage = Number(page);
    let numLimit = Number(limit);
    let offset = numPage * numLimit - numLimit;
    //если не указаны brandId, typeId возвращаем все девайсы если указан делаем филттрацию
    let devices;
    if (!brandId && !typeId) {
      //запрос к базе данных
      devices = await models.Device.findAndCountAll({limit: numLimit, offset})
    }
    if (brandId && !typeId) {
      //Здесб есть брэнд id по этому передаем обьект
      devices = await models.Device.findAndCountAll({where: {brandId}, limit: numLimit, offset})
    }
    if (!brandId && typeId) {
      devices = await models.Device.findAndCountAll({where: {typeId}, limit: numLimit, offset})
    }
    if (brandId && typeId) {
      devices = await models.Device.findAndCountAll({where: {brandId, typeId}, limit: numLimit, offset})
    }
    return res.json(devices)
  }

  async getOne(req: Request, res: Response) {

  }

}

export default new DeviceController()
