import { Router } from "express";
import productos from "./productos";
import clientes from "./clientes";

const routes = Router();

// ruta para productos
routes.use('/productos', productos);
routes.use('/clientes', clientes);

export default routes;