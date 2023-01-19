import { Request, Response, Router } from "express";
const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.status(200).send("Welcome to the api gateway microsservice");
})

export { routes };