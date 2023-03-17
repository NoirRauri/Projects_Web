import { IsDate, IsEmail } from "class-validator"
import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class Clientes {
    // se agregan las columnas y sus propiedades de la tabla
    @PrimaryColumn()
    cedula: number

    @Column()
    nombre: String

    @Column()
    apellido1: String

    @Column()
    apellido2: String

    @Column()
    @IsEmail()
    email: String

    @Column()
    @IsDate()
    fechaNac: Date

    @Column()
    estado: boolean

}