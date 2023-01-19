import axios from 'axios';
import { Request, Response } from 'express';

class ListVehiclesController {
  public async handle(request:Request, response: Response): Promise<Response> {
    const usersResponse = await axios({
      method: 'get',
      url: 'http://localhost:3002/',
    });
    return response.status(200).json(usersResponse.data);
  }
}

export { ListVehiclesController };