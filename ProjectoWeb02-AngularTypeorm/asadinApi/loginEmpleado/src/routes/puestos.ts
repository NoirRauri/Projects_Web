import { Router } from "express";
import PuestosController from "../controller/PuestosController";

const routes = Router();

// ruta para todos los dato:productos
routes.get('', PuestosController.get);
// ruta para buscar un producto por ID
routes.get('/:id', PuestosController.getById);
// // ruta para update un producto
// routes.patch('/update/:id', PuestosController.updateById)
// // ruta para crear un producto
// routes.post('/create', PuestosController.create)
// // ruta para eliminacion logica de un producto
// routes.delete('/:id', PuestosController.deleteById);

export default routes;