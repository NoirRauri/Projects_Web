import { validate } from "class-validator";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Empleados } from "../entity/Empleados";
import { Personas } from "../entity/Personas";
import { Puestos } from "../entity/Puestos";

class EmpleadosController {

    //........................ Busquedad get Empleados ........................
    static get = async (req: Request, res: Response) => {

        const EmpleadosRepo = AppDataSource.getRepository(Empleados);

        const listaEmpleados = await EmpleadosRepo.find({
            where: { estado: true }, relations: ["personas", "puestos"]
        });

        if (listaEmpleados.length > 0) {
            return res.status(200).json(listaEmpleados);
        } else {
            return res.status(400).json({ message: 'no hay datos' })
        }
    }

    //........................ Busquedad get Empleados por ID ........................
    static getById = async (req: Request, res: Response) => {

        const EmpleadosRepo = AppDataSource.getRepository(Empleados);

        const id = parseInt(req.params['id']);
        if (!id) {
            return res.status(400).json({ message: 'no se indico id' })
        }
        try {
            const Empleados = await EmpleadosRepo.findOneOrFail({
                where: { idEmpleado: id, estado: true }, relations: ["personas", "puestos"]
            });
            return res.status(200).json(Empleados)

        } catch (error) {
            return res.status(400).json({ message: 'no se encontro con el id' })

        }

    }

    //........................ Creacion de un nuevo Empleados ........................
    static create = async (req: Request, res: Response) => {

        const { idPersona, nombrePersona, apellido1Persona, apellido2Persona, emailPersona,
            telefonoPersona, idEmpleado, emailEmpleado, telefonoEmpleado, idPuesto } = req.body;

        if (!idPersona) {
            return res.status(400).json({ mesaage: 'Falta el idPersona' });
        } else if (!nombrePersona) {
            return res.status(400).json({ mesaage: 'Falta el nombre Persona' });
        } else if (!apellido1Persona) {
            return res.status(400).json({ mesaage: 'Falta el apellido1 Persona' });
        } else if (!apellido2Persona) {
            return res.status(400).json({ mesaage: 'Falta el apellido2 Persona' });
        } else if (!emailPersona) {
            return res.status(400).json({ mesaage: 'Falta el email Persona' });
        } else if (!telefonoPersona) {
            return res.status(400).json({ mesaage: 'Falta el telefono Persona' });
        } else if (!idEmpleado) {
            return res.status(400).json({ mesaage: 'Falta la id Empleado' });
        } else if (!emailEmpleado) {
            return res.status(400).json({ mesaage: 'Falta la email Empleado' });
        } else if (!telefonoEmpleado) {
            return res.status(400).json({ mesaage: 'Falta la telefono Empleado' });
        } else if (!idPuesto) {
            return res.status(400).json({ mesaage: 'Falta la id Puesto' });
        }

        const empleadoRepo = AppDataSource.getRepository(Empleados);

        if (await empleadoRepo.findOne({ where: { idEmpleado } })) {
            return res.status(400).json({ mesaage: 'El id ya existe' });
        }

        const puestoRepo = AppDataSource.getRepository(Puestos);

        let puest: Puestos;
        try {
            puest = await puestoRepo.findOneOrFail({ where: { idPuesto, estado: true } })
        } catch (error) {
            return res.status(400).json({ message: 'no se encontro el puesto' })
        }

        try {

            let pers = new Personas();
            let empl = new Empleados();

            pers.idPersona = idPersona;
            pers.nombrePersona = nombrePersona;
            pers.apellido1Persona = apellido1Persona;
            pers.apellido2Persona = apellido2Persona;
            pers.emailPersona = emailPersona;
            pers.telefonoPersona = telefonoPersona;

            empl.idEmpleado = idEmpleado;
            empl.emailEmpleado = emailEmpleado;
            empl.telefonoEmpleado = telefonoEmpleado;
            empl.personas = pers;
            empl.puestos = puest;

            // console.log("aqui");
            const errorPer = await validate(pers, { validationError: { target: false, value: false } })
            const errorEmpl = await validate(empl, { validationError: { target: false, value: false } })
            if (errorPer.length > 0) {
                return res.status(400).json(errorPer)
            }
            if (errorEmpl.length > 0) {
                return res.status(400).json(errorEmpl)
            }

            // console.log("aqui 2");
            await empleadoRepo.save(empl);
            console.log(empl);
            return res.status(201).json({ message: 'El empleado fue creado' })

        } catch (error) {
            return res.status(400).json({ message: error })
        }
    }

    //........................ Actualizar producto ........................
    static updateById = async (req: Request, res: Response) => {

        const id = parseInt(req.params['id']);

        const { idPersona, nombrePersona, apellido1Persona, apellido2Persona, emailPersona,
            telefonoPersona, idEmpleado, emailEmpleado, telefonoEmpleado, idPuesto } = req.body;

        if (!idEmpleado) {
            return res.status(400).json({ mesaage: 'Falta el ID' });
        } else if (!idPersona) {
            return res.status(400).json({ mesaage: 'Falta el idPersona' });
        } else if (!nombrePersona) {
            return res.status(400).json({ mesaage: 'Falta el nombre' });
        } else if (!apellido1Persona) {
            return res.status(400).json({ mesaage: 'Falta el apellido1' });
        } else if (!apellido2Persona) {
            return res.status(400).json({ mesaage: 'Falta el apellido2' });
        } else if (!emailPersona) {
            return res.status(400).json({ mesaage: 'Falta el emailPers' });
        } else if (!telefonoPersona) {
            return res.status(400).json({ mesaage: 'Falta la emailEmpl' });
        } else if (!emailEmpleado) {
            return res.status(400).json({ mesaage: 'Falta la telefonoPers' });
        } else if (!telefonoEmpleado) {
            return res.status(400).json({ mesaage: 'Falta la telefonoEmpl' });
        } else if (!idPuesto) {
            return res.status(400).json({ mesaage: 'Falta la puesto' });
        }

        const empleadoRepo = AppDataSource.getRepository(Empleados);
        const puestoRepo = AppDataSource.getRepository(Puestos);

        let empl: Empleados;
        let puest: Puestos;

        try {
            empl = await empleadoRepo.findOneOrFail({ where: { idEmpleado: id, estado: true } })
        } catch (error) {
            return res.status(400).json({ message: 'no se encontro con el id' })
        }
        try {
            puest = await puestoRepo.findOneOrFail({ where: { idPuesto, estado: true } })
        } catch (error) {
            return res.status(400).json({ message: 'no se encontro con el id' })
        }

        let pers = new Personas;

        pers.idPersona = idPersona;
        pers.nombrePersona = nombrePersona;
        pers.apellido1Persona = apellido1Persona;
        pers.apellido2Persona = apellido2Persona;
        pers.emailPersona = emailPersona;
        pers.telefonoPersona = telefonoPersona;

        empl.idEmpleado = idEmpleado;
        empl.emailEmpleado = emailEmpleado;
        empl.telefonoEmpleado = telefonoEmpleado;
        empl.personas = pers;
        empl.puestos = puest;

        const errorPer = await validate(pers, { validationError: { target: false, value: false } })
        const errorEmpl = await validate(empl, { validationError: { target: false, value: false } })

        if (errorPer.length > 0) {
            return res.status(400).json(errorPer)
        } else if (errorEmpl.length > 0) {
            return res.status(400).json(errorEmpl)
        }

        await empleadoRepo.save(empl);
        return res.status(201).json({ message: 'El Empleados a sido actualizado' })

    }

    //........................ Eliminacion logica del Empleados ........................
    static deleteById = async (req: Request, res: Response) => {

        const EmpleadosRepo = AppDataSource.getRepository(Empleados);

        const id = parseInt(req.params['id']);

        let empleado: Empleados;

        try {
            empleado = await EmpleadosRepo.findOneOrFail({ where: { idEmpleado: id, estado: true } })
        } catch (error) {
            return res.status(400).json({ message: 'no se encontro con el id' })
        }

        empleado.estado = false;
        await EmpleadosRepo.save(empleado);

        return res.status(200).json({ message: 'El empleado se ha eliminado' })
    }

}

export default EmpleadosController;