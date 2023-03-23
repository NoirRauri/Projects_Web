import { Router } from "express";
import PersonasController from "../controller/PersonasController";

const routes = Router();

// ruta para todos los dato:productos
routes.get('', PersonasController.get);
// ruta para buscar un producto por ID
routes.get('/:id', PersonasController.getById);
// // ruta para crear un producto
// routes.post('/create', PersonasController.create)
// // ruta para update un producto
// routes.patch('/update/:id', PersonasController.updateById)
// // ruta para eliminacion logica de un producto
// // routes.delete('/:id', PersonasController.deleteById);



export default routes;