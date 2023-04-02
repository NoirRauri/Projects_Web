import { validate } from "class-validator";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Personas } from "../entity/Personas";

class PersonasController {

    static get = async (req: Request, res: Response) => {

        const personasRepo = AppDataSource.getRepository(Personas);

        const lista = await personasRepo.find({ relations: { empleados: true } })

        if (lista.length > 0) { return res.status(200).json(lista); }

        else { return res.status(400).json({ message: 'no hay datos' }) }
    }

    //........................ Buscar producto por ID ........................
    static getById = async (req: Request, res: Response) => {

        const PersonasRepo = AppDataSource.getRepository(Personas);

        const idPersona = parseInt(req.params['id']);
        if (!idPersona) {
            return res.status(400).json({ message: 'no se indico idPersona' })
        }
        try {
            const categoria = await PersonasRepo.findOneOrFail({ where: { idPersona }, relations: ["empleados"] })
            return res.status(200).json(categoria)

        } catch (error) {
            return res.status(400).json({ message: 'no se encontro con el id' })
        }
    }

}

export default PersonasController;