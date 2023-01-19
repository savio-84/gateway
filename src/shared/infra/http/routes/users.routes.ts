import { Request, Response, Router } from "express";
const usersRoutes = Router();

import { CreateUsersController } from "../../../../modules/users/controllers/CreateUserController";
import { ListUsersController } from "../../../../modules/users/controllers/ListUsersController";

const createUsersController = new CreateUsersController();
const listUsersController = new ListUsersController();

usersRoutes.post('/', createUsersController.handle);
usersRoutes.get('/', listUsersController.handle);

export { usersRoutes };