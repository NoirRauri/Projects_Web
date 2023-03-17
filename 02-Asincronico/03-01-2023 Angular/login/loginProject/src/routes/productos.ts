import { Router } from "express";
import ProductosController from "../controller/ProductosController";

const routes = Router();

// ruta para todos los dato:productos
routes.get('', ProductosController.get);
// ruta para buscar un producto por ID
routes.get('/:id', ProductosController.getById);
// ruta para eliminacion logica de un producto
routes.delete('/:id', ProductosController.deleteById);



export default routes;