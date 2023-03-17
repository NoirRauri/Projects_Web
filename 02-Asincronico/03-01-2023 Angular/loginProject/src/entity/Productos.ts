import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Productos {
    // se agregan las columnas y sus propiedades de la tabla
    @PrimaryColumn()
    id: number

    @Column()
    nombre: String

    @Column()
    idCategoria: number

    @Column()
    precio: number

    @Column()
    estado: boolean

}