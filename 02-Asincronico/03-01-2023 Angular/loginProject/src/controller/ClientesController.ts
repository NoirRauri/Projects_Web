import { Request, response, Response } from "express";
// import { request } from "https";
import { AppDataSource } from "../data-source";
import { Clientes } from "../entity/Clientes";

class ClientesController {

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

    // Busquedad get por ID
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

    // Eliminacion logica del clientes
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