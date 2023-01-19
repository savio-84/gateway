import { Request, Response, Router } from "express";
import { usersRoutes } from "./users.routes";
import { vehiclesRoutes } from "./vehicles.routes";
const routes = Router();

routes.get('/test-availability', (request: Request, response: Response) => {
  return response.status(200).send("Welcome to the api gateway microsservice");
});

routes.use('/users', usersRoutes);
routes.use('/vehicles', vehiclesRoutes);

export { routes };