import { Router } from "express";
const vehiclesRoutes = Router();

import { CreateVehicleController } from "../../../../modules/vehicles/controllers/CreateVehiclesController";
import { ListVehiclesController } from "../../../../modules/vehicles/controllers/ListVehiclesController";
const createVehicleController = new CreateVehicleController();
const listVehiclesController = new ListVehiclesController();

vehiclesRoutes.post('/', createVehicleController.handle);
vehiclesRoutes.get('/', listVehiclesController.handle);

export { vehiclesRoutes };