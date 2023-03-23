import { Router } from "express";
import empleados from "./empleados";
import personas from "./personas";
import puestos from "./puestos";

const routes = Router();

// ruta para productos
routes.use('/personas', personas);
routes.use('/empleados', empleados);
routes.use('/puestos', puestos);

export default routes;