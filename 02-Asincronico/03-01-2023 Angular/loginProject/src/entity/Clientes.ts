import { IsDate, IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator"
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class Clientes {
    // se agregan las columnas y sus propiedades de la tabla
    @PrimaryColumn()
    @IsInt({ message: 'Tiene que ser un valir entero' })
    @IsNotEmpty()
    cedula: number

    @Column()
    @IsString({ message: 'Tiene que ser un valor de caracter' })
    @IsNotEmpty()
    nombre: String

    @Column()
    @IsString({ message: 'Tiene que ser un valor de caracter' })
    @IsNotEmpty()
    apellido1: String

    @Column()
    @IsString({ message: 'Tiene que ser un valor de caracter' })
    @IsNotEmpty()
    apellido2: String

    @Column()
    @IsString({ message: 'Tiene que ser un valor de caracter' })
    @IsNotEmpty()
    email: String

    @CreateDateColumn()
    @IsNotEmpty()
    @IsDate({ message: 'Tiene que ser un valor Fecha' })
    fechaNac: Date

    @Column({ default: true })
    @IsNotEmpty()
    estado: boolean

}