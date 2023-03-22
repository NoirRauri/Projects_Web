import { validate } from "class-validator";
import { Request, Response } from "express";
// import { request } from "https";
import { AppDataSource } from "../data-source";
import { Categorias } from "../entity/Categorias";
import { Productos } from "../entity/Productos";

class ProductosController {

  static get = async (req: Request, res: Response) => {

    //repositorio(entidad de productos )
    const productosRepo = AppDataSource.getRepository(Productos);

    // Vericacion de entrada a la BD
    const listaProduct = await productosRepo.find({ where: { estado: true }, relations: ["categoria"] });//amlacena todos los produtos en listaProduct
    if (listaProduct.length > 0) { // si encuantra 1 o mas datos:Productos los muestra
      return res.status(200).json(listaProduct);
    } else { // de lo contrario un msnJson
      return res.status(400).json({ message: 'no hay datos' })
    }
  }

  //........................ Buscar producto por ID ........................
  static getById = async (req: Request, res: Response) => {
    //pasar datos por id
    const productosRepo = AppDataSource.getRepository(Productos);
    // parseamos el ID a Int
    const id = parseInt(req.params['id']);
    if (!id) { //si no idica el ID manda un msnJson
      return res.status(400).json({ message: 'no se indico id' })
    }
    try { // si lo encuantra manda la respuesta en Json
      const producto = await productosRepo.findOneOrFail({ where: { id, estado: true }, relations: ["categoria"] })
      return res.status(200).json(producto)

    } catch (error) { //si no encuantra el ID manda un msnJson
      return res.status(400).json({ message: 'no se encontro con el id' })
    }
  }

  //........................ Creacion de un nuevo producto ........................
  static create = async (req: Request, res: Response) => {

    const { id, idCategoria, nombre, precio } = req.body;

    if (!id) {
      return res.status(400).json({ mesaage: 'Falta el ID' })
    } else if (!idCategoria) {
      return res.status(400).json({ mesaage: 'Falta la Categoria' })
    }

    const productosRepo = AppDataSource.getRepository(Productos);

    if (await productosRepo.findOne({ where: { id } })) {
      return res.status(400).json({ mesaage: 'El id ya existe' })
    }

    const categoriaRepo = AppDataSource.getRepository(Categorias);

    let categoria: Categorias;
    try {
      categoria = await categoriaRepo.findOneOrFail({ where: { id: idCategoria } })

    } catch (error) {
      return res.status(400).json({ message: 'La categoria no existe' })
    }

    try {
      //ingreso de los datos del body a las columnas de la entidad
      let prod = new Productos
      prod.id = id;
      prod.nombre = nombre;
      prod.categoria = categoria;
      prod.precio = precio;

      // validacion de dato con class-validator
      const error = await validate(prod, { validationError: { target: false, value: false } })
      if (error.length > 0) {
        res.status(400).json(error)
      }

      // guardado de los datos del cliente
      await productosRepo.save(prod);
      return res.status(201).json({ message: 'El producto fue creado' })

    } catch (error) {
      return res.status(400).json({ message: 'Los datos estan incompletos o erroneos' })
    }

  }

  //........................ Actualizar producto ........................
  static updateById = async (req: Request, res: Response) => {

    const id = parseInt(req.params['id']);
    const { nombre, idCategoria, precio } = req.body;

    if (!id) {
      return res.status(400).json({ mesaage: 'Falta el ID' })
    } else if (!idCategoria) {
      return res.status(400).json({ mesaage: 'Falta la Categoria' })
    }

    const productosRepo = AppDataSource.getRepository(Productos);
    let prod: Productos;
    try {
      // valida si existe el producto
      prod = await productosRepo.findOneOrFail({ where: { id } })

    } catch (error) {
      // Envia un error si no existe en la base de datos
      return res.status(400).json({ message: 'no se encontro con el id' })

    }

    prod.nombre = nombre;
    prod.precio = precio;
    prod.categoria = idCategoria;

    const error = await validate(prod, { validationError: { target: false, value: false } })
    if (error.length > 0) {
      res.status(400).json(error)
    }

    await productosRepo.save(prod);
    return res.status(201).json({ message: 'El producto a sido actualizado' })

  }

  //........................ Eliminacion logica del producto ........................
  static deleteById = async (req: Request, res: Response) => {
    //pasar datos por id
    const productosRepo = AppDataSource.getRepository(Productos);

    const id = parseInt(req.params['id']);
    // var = variable Global cualquiera lo puede accede 
    // let = cuando esta dentro de un metodo o que lo contenga no es global
    let producto: Productos; //se agrega la variable duera del tryCatch para que la puedan acceder todo el metodo
    // un try-catch donde muestra un mensaje en el catch si no encuantra el ID
    try {
      producto = await productosRepo.findOneOrFail({ where: { id, estado: true } })
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