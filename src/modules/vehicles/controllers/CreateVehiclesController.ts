import axios from 'axios';
import { Request, Response } from 'express';

class CreateVehicleController {
  public async handle(request:Request, response: Response): Promise<Response> {
    const usersResponse = await axios({
      method: 'post',
      url: 'http://localhost:3002/',
      data: {
        brand: request.body.brand,
        color: request.body.color,
        model: request.body.model,
        year: request.body.year,
      }
    });
    return response.status(200).json(usersResponse.data);
  }
}

export { CreateVehicleController };