import { Request, Response, Router } from "express";
import { usersRoutes } from "./users.routes";
const routes = Router();

routes.get('/test-availability', (request: Request, response: Response) => {
  return response.status(200).send("Welcome to the api gateway microsservice");
});

routes.use('/users', usersRoutes);

export { routes };