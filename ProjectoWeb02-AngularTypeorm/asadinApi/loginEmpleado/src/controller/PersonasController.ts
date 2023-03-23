import { validate } from "class-validator";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Personas } from "../entity/Personas";

class PersonasController {

    static get = async (req: Request, res: Response) => {

        const personasRepo = AppDataSource.getRepository(Personas);

        const lista = await personasRepo.find({ relations: ["empleados"] })

        if (lista.length > 0) { return res.status(200).json(lista); }

        else { return res.status(400).json({ message: 'no hay datos' }) }
    }

    //........................ Buscar producto por ID ........................
    static getById = async (req: Request, res: Response) => {

        const PersonasRepo = AppDataSource.getRepository(Personas);

        const id = parseInt(req.params['id']);
        if (!id) {
            return res.status(400).json({ message: 'no se indico id' })
        }
        try {
            const categoria = await PersonasRepo.findOneOrFail({ where: { idPersona: id }, relations: ["empleados"] })
            return res.status(200).json(categoria)

        } catch (error) {
            return res.status(400).json({ message: 'no se encontro con el id' })
        }
    }

    //........................ Creacion de un nuevo producto ........................
    static create = async (req: Request, res: Response) => {

        const { id, nombre, apellido1, apellido2, email, telefono } = req.body;

        if (!id) {
            return res.status(400).json({ mesaage: 'Falta el id' })
        } else if (!nombre) {
            return res.status(400).json({ mesaage: 'Falta el nombre' })
        } else if (!apellido1) {
            return res.status(400).json({ mesaage: 'Falta el apellido1' })
        } else if (!apellido2) {
            return res.status(400).json({ mesaage: 'Falta el apellido2' })
        } else if (!email) {
            return res.status(400).json({ mesaage: 'Falta el email' })
        } else if (!telefono) {
            return res.status(400).json({ mesaage: 'Falta el telefono' })
        }

        const personasRepo = AppDataSource.getRepository(Personas);

        if (await personasRepo.findOne({ where: { idPersona: id } })) {
            return res.status(400).json({ mesaage: 'El id ya existe' })
        }

        try {

            let per = new Personas
            per.idPersona = id;
            per.nombre = nombre;
            per.apellido1 = apellido1;
            per.apellido2 = apellido2;
            per.email = email;
            per.telefono = telefono;

            const error = await validate(per, { validationError: { target: false, value: false } })
            if (error.length > 0) {
                res.status(400).json({ error })
            }

            await personasRepo.save(per);
            return res.status(201).json({ message: 'La Perosona fue creado' })

        } catch (error) {
            return res.status(400).json({ message: 'Los datos estan incompletos o erroneos' })
        }
    }

    //........................ Actualizar producto ........................
    static updateById = async (req: Request, res: Response) => {

        const id = parseInt(req.params['id']);
        const { nombre, apellido1, apellido2, email, telefono } = req.body;

        if (!nombre) {
            return res.status(400).json({ mesaage: 'Falta el nombre' })
        } else if (!apellido1) {
            return res.status(400).json({ mesaage: 'Falta el apellido1' })
        } else if (!apellido2) {
            return res.status(400).json({ mesaage: 'Falta el apellido2' })
        } else if (!email) {
            return res.status(400).json({ mesaage: 'Falta el email' })
        } else if (!telefono) {
            return res.status(400).json({ mesaage: 'Falta el telefono' })
        }

        const PersonasRepo = AppDataSource.getRepository(Personas);
        let cat: Personas;
        try {

            cat = await PersonasRepo.findOneOrFail({ where: { idPersona: id } })

        } catch (error) {

            return res.status(400).json({ message: 'no se encontro con el id' })

        }

        cat.nombre = nombre;

        const error = await validate(cat, { validationError: { target: false, value: false } })
        if (error.length > 0) {
            res.status(400).json(error)
        }

        await PersonasRepo.save(cat);
        return res.status(201).json({ message: 'La categoria a sido actualizado' })

    }

    //........................ Eliminacion logica del producto ........................
    // static deleteById = async (req: Request, res: Response) => {


    //     const PersonasRepo = AppDataSource.getRepository(Personas);

    //     const id = parseInt(req.params['id']);

    //     let cat: Personas;
    //     try {
    //         cat = await PersonasRepo.findOneOrFail({ where: { idPersona: id } })
    //     } catch (error) {
    //         return res.status(400).json({ message: 'no se encontro con el id' })
    //     }

    //     cat.estado = false;
    //     await PersonasRepo.save(cat);
    //     return res.status(200).json({ message: 'La categoria se ha eliminado' })

    // }

}

export default PersonasController;