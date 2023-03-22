import { Router } from "express";
import CategoriasController from "../controller/CategoriasController";

const routes = Router();

// ruta para todos los dato:productos
routes.get('', CategoriasController.get);
// ruta para buscar un producto por ID
routes.get('/:id', CategoriasController.getById);
// ruta para crear un producto
routes.post('/create', CategoriasController.create)
// ruta para update un producto
routes.patch('/update/:id', CategoriasController.updateById)
// ruta para eliminacion logica de un producto
routes.delete('/:id', CategoriasController.deleteById);


export default routes;