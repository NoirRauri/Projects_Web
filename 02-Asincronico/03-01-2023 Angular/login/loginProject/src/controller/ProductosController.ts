import { Request, response, Response } from "express";
// import { request } from "https";
import { AppDataSource } from "../data-source";
import { Productos } from "../entity/Productos";

class ProductosController {

  static get = async (req: Request, res: Response) => {

    //repositorio(entidad de productos )
    const productosRepo = AppDataSource.getRepository(Productos);

    // Vericacion de entrada a la BD
    const listaProduct = await productosRepo.find();//amlacena todos los produtos en listaProduct
    if (listaProduct.length > 0) { // si encuantra 1 o mas datos:Prodcutos los muestra
      return res.status(200).json(listaProduct);
    } else { // de lo contrario un msnJson
      return res.status(400).json({ message: 'no hay datos' })
    }
  }

  // Busquedad get por ID
  static getById = async (req: Request, res: Response) => {
    //pasar datos por id
    const productosRepo = AppDataSource.getRepository(Productos);
    // parseamos el ID a Int
    const id = parseInt(req.params['id']);
    if (!id) { //si no idica el ID manda un msnJson
      return res.status(400).json({ message: 'no se indico id' })
    }
    try { // si lo encuantra manda la respuesta en Json
      const producto = await productosRepo.findOneOrFail({ where: { id } })
      return res.status(200).json(producto)

    } catch (error) { //si no encuantra el ID manda un msnJson
      return res.status(400).json({ message: 'no se encontro con el id' })

    }

  }

  // Eliminacion logica del producto
  static deleteById = async (req: Request, res: Response) => {
    //pasar datos por id
    const productosRepo = AppDataSource.getRepository(Productos);

    const id = parseInt(req.params['id']);
    // var = variable Global cualquiera lo puede accede 
    // let = cuando esta dentro de un metodo o que lo contenga no es global
    let producto: Productos; //se agrega la variable duera del tryCatch para que la puedan acceder todo el metodo
    // un try-catch donde muestra un mensaje en el catch si no encuantra el ID
    try {
      producto = await productosRepo.findOneOrFail({ where: { id } })
    } catch (error) {
      return res.status(400).json({ message: 'no se encontro con el id' })

    }
    // se cambia el valor a falso para una eliminacion logica
    producto.estado = false;
    await productosRepo.save(producto);//se guarda el cambion con .save
    // reyorna un mesaje que se logro la eliminacion del producto
    return res.status(200).json({ message: 'El producto se ha eliminado' })
  }

}

export default ProductosController;