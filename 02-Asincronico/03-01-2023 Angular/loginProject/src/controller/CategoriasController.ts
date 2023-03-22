import { validate } from "class-validator";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Categorias } from "../entity/Categorias";
import { Productos } from "../entity/Productos";

class CategoriasController {

    static get = async (req: Request, res: Response) => {

        // repositorio Entidad Categoria
        const categoriaRepo = AppDataSource.getRepository(Categorias);
        // verifica en la BD el estado
        const lista = await categoriaRepo.find({ where: { estado: true }, relations: ["productos"] })

        // retorna si tiene 1 o mas categorias
        if (lista.length > 0) { return res.status(200).json(lista); }
        // de lo contrario manda este msnJson
        else { return res.status(400).json({ message: 'no hay datos' }) }
    }

    //........................ Buscar producto por ID ........................
    static getById = async (req: Request, res: Response) => {
        //pasar datos por id
        const categoriasRepo = AppDataSource.getRepository(Categorias);
        // parseamos el ID a Int
        const id = parseInt(req.params['id']);
        if (!id) { //si no idica el ID manda un msnJson
            return res.status(400).json({ message: 'no se indico id' })
        }
        try { // si lo encuantra manda la respuesta en Json
            const categoria = await categoriasRepo.findOneOrFail({ where: { id, estado: true }, relations: ["productos"] })
            return res.status(200).json(categoria)

        } catch (error) { //si no encuantra el ID manda un msnJson
            return res.status(400).json({ message: 'no se encontro con el id' })
        }
    }

    //........................ Creacion de un nuevo producto ........................
    static create = async (req: Request, res: Response) => {

        const { id, nombre } = req.body;

        if (!id) {
            return res.status(400).json({ mesaage: 'Falta el id' })
        }

        const categoriaRepo = AppDataSource.getRepository(Categorias);

        if (await categoriaRepo.findOne({ where: { id } })) {
            return res.status(400).json({ mesaage: 'El id ya existe' })
        }

        try {
            //ingreso de los datos del body a las columnas de la entidad
            let cat = new Categorias
            cat.id = id;
            cat.nombre = nombre;

            // validacion de dato con class-validator
            const error = await validate(cat, { validationError: { target: false, value: false } })
            if (error.length > 0) {
                res.status(400).json({ error })
            }

            // guardado de los datos del cliente
            await categoriaRepo.save(cat);
            return res.status(201).json({ message: 'La categoria fue creado' })

        } catch (error) {
            return res.status(400).json({ message: 'Los datos estan incompletos o erroneos' })
        }
    }

    //........................ Actualizar producto ........................
    static updateById = async (req: Request, res: Response) => {

        const id = parseInt(req.params['id']);
        const { nombre } = req.body;

        if (!id) {
            return res.status(400).json({ mesaage: 'Falta el ID' })
        }

        const categoriasRepo = AppDataSource.getRepository(Categorias);
        let cat: Categorias;
        try {
            // valida si existe el producto
            cat = await categoriasRepo.findOneOrFail({ where: { id } })

        } catch (error) {
            // Envia un error si no existe en la base de datos
            return res.status(400).json({ message: 'no se encontro con el id' })

        }

        cat.nombre = nombre;

        const error = await validate(cat, { validationError: { target: false, value: false } })
        if (error.length > 0) {
            res.status(400).json(error)
        }

        await categoriasRepo.save(cat);
        return res.status(201).json({ message: 'La categoria a sido actualizado' })

    }

    //........................ Eliminacion logica del producto ........................
    static deleteById = async (req: Request, res: Response) => {

        //repositorio de Categorias
        const categoriasRepo = AppDataSource.getRepository(Categorias);

        const id = parseInt(req.params['id']);

        let cat: Categorias;
        try {
            cat = await categoriasRepo.findOneOrFail({ where: { id, estado: true } })
        } catch (error) {
            return res.status(400).json({ message: 'no se encontro con el id' })
        }

        cat.estado = false;
        await categoriasRepo.save(cat);
        return res.status(200).json({ message: 'La categoria se ha eliminado' })

    }

}

export default CategoriasController;