import { Request, Response } from "express";
import axios from 'axios';

class ListUsersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const usersResponse = await axios({
      method: 'get',
      url: 'http://localhost:3001/',
    });

    return response.status(200).send(usersResponse.data);
  }
}

export { ListUsersController };