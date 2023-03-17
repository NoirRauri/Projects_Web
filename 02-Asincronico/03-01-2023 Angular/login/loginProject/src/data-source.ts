import "reflect-metadata"
import { DataSource } from "typeorm"
import { Productos } from "./entity/Productos"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "login",
    synchronize: true,
    logging: false,
    //En entities se agregan las rutas de las entidades
    entities: [User, Productos],
    migrations: [],
    subscribers: [],
})
