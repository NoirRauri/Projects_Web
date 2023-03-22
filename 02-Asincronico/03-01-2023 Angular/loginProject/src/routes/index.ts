import { Router } from "express";
import productos from "./productos";
import clientes from "./clientes";
import categorias from "./Categorias";

const routes = Router();

// ruta para productos
routes.use('/productos', productos);
routes.use('/clientes', clientes);
routes.use('/categorias', categorias);


export default routes;