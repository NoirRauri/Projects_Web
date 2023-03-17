import { Router } from "express";
import productos from "./productos";

const routes = Router();

// ruta para productos
routes.use('/productos', productos);

export default routes;