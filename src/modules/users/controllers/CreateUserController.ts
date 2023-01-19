import { Request, Response } from "express";
import axios from 'axios';

class CreateUsersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const usersResponse = await axios({
      method: 'post',
      url: 'http://localhost:3001/',
      data: {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
      }
    });
  
    return response.status(200).send(usersResponse.data);
  }
}

export { CreateUsersController };