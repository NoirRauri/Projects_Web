import { Router } from "express";
import PersonasController from "../controller/PersonasController";

const routes = Router();

// ruta para todos los dato:productos
routes.get('', PersonasController.get);
// ruta para buscar un producto por ID
routes.get('/:id', PersonasController.getById);



export default routes;