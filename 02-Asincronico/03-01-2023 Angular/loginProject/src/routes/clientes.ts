import { Router } from "express";
import ClientesController from "../controller/ClientesController";

const routes = Router();

// ruta para todos los dato:productos
routes.get('', ClientesController.get);
// ruta para buscar un producto por ID
routes.get('/:id', ClientesController.getById);
// ruta para eliminacion logica de un producto
routes.delete('/:id', ClientesController.deleteById);



export default routes;