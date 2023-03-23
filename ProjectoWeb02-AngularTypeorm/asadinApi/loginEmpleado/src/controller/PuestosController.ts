import { validate } from "class-validator";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Puestos } from "../entity/Puestos";

class PuestosController {

  static get = async (req: Request, res: Response) => {

    const PuestosRepo = AppDataSource.getRepository(Puestos);

    const listaPuesto = await PuestosRepo.find({ where: { estado: true }, relations: ["empleados"] });
    if (listaPuesto.length > 0) {
      return res.status(200).json(listaPuesto);
    } else {
      return res.status(400).json({ message: 'no hay datos' })
    }
  }

  //........................ Buscar puesto por ID ........................
  static getById = async (req: Request, res: Response) => {

    const PuestosRepo = AppDataSource.getRepository(Puestos);

    const id = parseInt(req.params['id']);
    if (!id) {
      return res.status(400).json({ message: 'no se indico id' })
    }
    try {
      const puesto = await PuestosRepo.findOneOrFail({ where: { idPuesto: id, estado: true }, relations: ["empleados"] })
      return res.status(200).json(puesto)

    } catch (error) {
      return res.status(400).json({ message: 'no se encontro con el id' })
    }
  }

  //........................ Creacion de un nuevo puesto ........................
  static create = async (req: Request, res: Response) => {

    const { idPuesto, nombrePuesto } = req.body;

    if (!idPuesto) {
      return res.status(400).json({ mesaage: 'Falta el ID' })
    } else if (!nombrePuesto) {
      return res.status(400).json({ mesaage: 'Falta la Categoria' })
    }

    const PuestosRepo = AppDataSource.getRepository(Puestos);

    if (await PuestosRepo.findOne({ where: { idPuesto } })) {
      return res.status(400).json({ mesaage: 'El id ya existe' })
    }

    const puestoRepo = AppDataSource.getRepository(Puestos);

    let puesto: Puestos;
    try {
      puesto = await puestoRepo.findOneOrFail({ where: { idPuesto } })

    } catch (error) {
      return res.status(400).json({ message: 'La puesto no existe' })
    }

    try {

      let puesto = new Puestos
      puesto.idPuesto = idPuesto;
      puesto.nombrePuesto = nombrePuesto;

      const error = await validate(puesto, { validationError: { target: false, value: false } })
      if (error.length > 0) {
        res.status(400).json(error)
      }

      await PuestosRepo.save(puesto);
      return res.status(201).json({ message: 'El puesto fue creado' })

    } catch (error) {
      return res.status(400).json({ message: 'Los datos estan incompletos o erroneos' })
    }

  }

  //........................ Actualizar puesto ........................
  static updateById = async (req: Request, res: Response) => {

    const id = parseInt(req.params['id']);
    const { nombre } = req.body;

    if (!id) {
      return res.status(400).json({ mesaage: 'Falta el ID' })
    } else if (!nombre) {
      return res.status(400).json({ mesaage: 'Falta la Categoria' })
    }

    const PuestosRepo = AppDataSource.getRepository(Puestos);
    let puesto: Puestos;
    try {

      puesto = await PuestosRepo.findOneOrFail({ where: { idPuesto: id } })

    } catch (error) {

      return res.status(400).json({ message: 'no se encontro con el id' })

    }

    puesto.idPuesto = id;
    puesto.nombrePuesto = nombre;

    const error = await validate(puesto, { validationError: { target: false, value: false } })
    if (error.length > 0) {
      res.status(400).json(error)
    }

    await PuestosRepo.save(puesto);
    return res.status(201).json({ message: 'El puesto a sido actualizado' })

  }

  //........................ Eliminacion logica del puesto ........................
  static deleteById = async (req: Request, res: Response) => {

    const PuestosRepo = AppDataSource.getRepository(Puestos);

    const id = parseInt(req.params['id']);

    let puesto: Puestos;

    try {
      puesto = await PuestosRepo.findOneOrFail({ where: { idPuesto: id, estado: true } })
    } catch (error) {
      return res.status(400).json({ message: 'no se encontro con el id' })

    }

    puesto.estado = false;
    await PuestosRepo.save(puesto);

    return res.status(200).json({ message: 'El puesto se ha eliminado' })
  }

}

export default PuestosController;