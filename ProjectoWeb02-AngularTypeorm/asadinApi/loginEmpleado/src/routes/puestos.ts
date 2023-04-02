import { Router } from "express";
import PuestosController from "../controller/PuestosController";

const routes = Router();

// ruta para todos los dato:productos
routes.get('', PuestosController.get);
// ruta para buscar un producto por ID
routes.get('/:id', PuestosController.getById);

export default routes;