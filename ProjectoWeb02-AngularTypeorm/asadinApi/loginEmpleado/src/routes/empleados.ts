import { Router } from "express";
import EmpleadosController from "../controller/EmpleadosController";

const routes = Router();

// ruta para todos los dato:productos
routes.get('', EmpleadosController.get);
// ruta para buscar un producto por ID
routes.get('/:id', EmpleadosController.getById);
// ruta para crear un producto
routes.post('/create', EmpleadosController.create)
// ruta para update un producto
routes.patch('/update/:id', EmpleadosController.updateById)
// ruta para eliminacion logica de un producto
routes.delete('/:id', EmpleadosController.deleteById);


export default routes;