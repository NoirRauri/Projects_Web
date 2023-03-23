import { IsBoolean, IsInt, IsNotEmpty, IsPositive, IsString, MaxLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Empleados } from "./Empleados";

@Entity()
export class Puestos {

    @PrimaryGeneratedColumn()
    @IsInt({ message: 'El ID debe ser entero' })
    @IsPositive({ message: 'El ID debe de ser mayor que 0' })
    @IsNotEmpty({ message: 'se requiere ID' })
    idPuesto: number

    @Column()
    @MaxLength(50, { message: 'El nombre debe de ser menor a 50 caracteres' })
    @IsString({ message: 'El nombre debe de ser en caracter' })
    @IsNotEmpty({ message: 'se requiere Nombre' })
    nombrePuesto: String

    @Column({ default: true })
    @IsBoolean({ message: 'se requiere un valor booleano' })
    estado: boolean

    @OneToMany(() => Empleados, (empleados) => empleados.puestos)
    empleados: Empleados[]

}