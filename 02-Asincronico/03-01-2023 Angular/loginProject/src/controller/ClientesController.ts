import { Request, response, Response } from "express";
// import { request } from "https";
import { AppDataSource } from "../data-source";
import { Clientes } from "../entity/Clientes";

class ClientesController {

    //........................ Busquedad get Clientes ........................
    static get = async (req: Request, res: Response) => {

        //repositorio(entidad de Clientes )
        const ClientesRepo = AppDataSource.getRepository(Clientes);

        // Vericacion de entrada a la BD
        const listaClientes = await ClientesRepo.find({ where: { estado: true } });//amlacena todos los clientes en listaClientes
        if (listaClientes.length > 0) { // si encuantra 1 o mas datos:clientes los muestra
            return res.status(200).json(listaClientes);
        } else { // de lo contrario un msnJson
            return res.status(400).json({ message: 'no hay datos' })
        }
    }

    //........................ Busquedad get Cliente por ID ........................
    static getById = async (req: Request, res: Response) => {
        //pasar datos por id
        const ClientesRepo = AppDataSource.getRepository(Clientes);
        // parseamos el ID a Int
        const id = parseInt(req.params['id']);
        if (!id) { //si no idica el ID manda un msnJson
            return res.status(400).json({ message: 'no se indico id' })
        }
        try { // si lo encuantra manda la respuesta en Json
            const clientes = await ClientesRepo.findOneOrFail({ where: { cedula: id, estado: true } })
            return res.status(200).json(clientes)

        } catch (error) { //si no encuantra el ID manda un msnJson
            return res.status(400).json({ message: 'no se encontro con el id' })

        }

    }

    //........................ Creacion de un nuevo cliente ........................
    static create = async (req: Request, res: Response) => {

        const { cedula, nombre, apellido1, apellido2, email, fechaNac } = req.body;

        // console.log(req.body)

        if (!cedula) {
            return res.status(400).json({ mesaage: 'Falta el ID' });
        } else if (!nombre) {
            return res.status(400).json({ mesaage: 'Falta el Nombre' });
        } else if (!apellido1) {
            return res.status(400).json({ mesaage: 'Falta la apellido1' });
        } else if (!apellido2) {
            return res.status(400).json({ mesaage: 'Falta el apellido2' });
        } else if (!email) {
            return res.status(400).json({ mesaage: 'Falta el email' });
        } else if (!fechaNac) {
            return res.status(400).json({ mesaage: 'Falta el fechaNac' });
        }

        const clienteRepo = AppDataSource.getRepository(Clientes);

        if (await clienteRepo.findOne({ where: { cedula } })) {
            return res.status(400).json({ mesaage: 'El id ya existe' });
        }

        try {

            let cli = new Clientes
            cli.cedula = cedula;
            cli.nombre = nombre;
            cli.apellido1 = apellido1;
            cli.apellido2 = apellido2;
            cli.email = email;
            cli.fechaNac = fechaNac;

            await clienteRepo.save(cli);
            console.log(cli);
            return res.status(201).json({ message: 'El cliente fue creado' })

        } catch (error) {
            return res.status(400).json({ message: 'Los datos estan incompletos o erroneos' })
        }
    }

    //........................ Actualizar producto ........................
    static updateById = async (req: Request, res: Response) => {

        const ClientesRepo = AppDataSource.getRepository(Clientes);

        const id = parseInt(req.params['id']);
        console.log(id)
        const { nombre, apellido1, apellido2, email, fechaNac } = req.body;

        if (!nombre) {
            return res.status(400).json({ mesaage: 'Falta el Nombre' });
        } else if (!apellido1) {
            return res.status(400).json({ mesaage: 'Falta la apellido1' });
        } else if (!apellido2) {
            return res.status(400).json({ mesaage: 'Falta el apellido2' });
        } else if (!email) {
            return res.status(400).json({ mesaage: 'Falta el email' });
        } else if (!fechaNac) {
            return res.status(400).json({ mesaage: 'Falta el fechaNac' });
        }
        let cli: Clientes
        try {
            cli = await ClientesRepo.findOneOrFail({ where: { cedula: id, estado: true } })
        } catch (error) {
            return res.status(400).json({ message: 'no se encontro con el id' })
        }

        cli.nombre = nombre;
        cli.apellido1 = apellido1;
        cli.apellido2 = apellido2;
        cli.email = email;
        cli.fechaNac = fechaNac;

        await ClientesRepo.save(cli);
        return res.status(201).json({ message: 'El clientes a sido actualizado' })

    }

    //........................ Eliminacion logica del clientes ........................
    static deleteById = async (req: Request, res: Response) => {
        //pasar datos por id
        const ClientesRepo = AppDataSource.getRepository(Clientes);

        const id = parseInt(req.params['id']);
        // var = variable Global cualquiera lo puede accede 
        // let = cuando esta dentro de un metodo o que lo contenga no es global
        let cliente: Clientes; //se agrega la variable dentro del tryCatch para que la puedan acceder todo el metodo
        // un try-catch donde muestra un mensaje en el catch si no encuantra el ID
        try {
            cliente = await ClientesRepo.findOneOrFail({ where: { cedula: id, estado: true } })
        } catch (error) {
            return res.status(400).json({ message: 'no se encontro con el id' })

        }
        // se cambia el valor a falso para una eliminacion logica
        cliente.estado = false;
        await ClientesRepo.save(cliente);//se guarda el cambion con .save
        // reyorna un mesaje que se logro la eliminacion del clientes
        return res.status(200).json({ message: 'El cliente se ha eliminado' })
    }

}

export default ClientesController;