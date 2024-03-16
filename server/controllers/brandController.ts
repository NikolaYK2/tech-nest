import { Request, Response } from 'express';
import models from "../models/models";

class BrandController {
  async create(req:Request, res:Response) {
    const {name} = req.body;
    const brand = await models.Type.create({name});
    return res.jsonp(brand);

  }
  async getAll(req:Request, res:Response) {
  }

}

export default new BrandController()
