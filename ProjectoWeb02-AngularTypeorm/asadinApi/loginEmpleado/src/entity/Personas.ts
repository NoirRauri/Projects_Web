import { IsEmail, IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Entity, Column, OneToMany, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { Empleados } from "./Empleados";

@Entity()
export class Personas {
    @PrimaryColumn()
    @IsInt({ message: 'Tiene que ser un valor entero' })
    @IsNotEmpty({ message: 'No tiene un ID' })
    idPersona: number;

    @Column()
    @MaxLength(50, { message: 'El nombre tiene mas de 50 categorias' })
    @IsString({ message: 'Tiene que ser un valor de caracter' })
    @IsNotEmpty({ message: 'No tiene un nombre' })
    nombrePersona: string;

    @Column()
    @MaxLength(50, { message: 'El nombre tiene mas de 50 categorias' })
    @IsString({ message: 'Tiene que ser un valor de caracter' })
    @IsNotEmpty({ message: 'No tiene un apellido' })
    apellido1Persona: String

    @Column()
    @MaxLength(50, { message: 'El nombre tiene mas de 50 categorias' })
    @IsString({ message: 'Tiene que ser un valor de caracter' })
    @IsNotEmpty({ message: 'No tiene un apellido' })
    apellido2Persona: String

    @Column()
    @IsEmail(undefined, { message: "Persona@Persona.com" })
    @IsString({ message: 'Tiene que ser un valor de caracter' })
    @IsNotEmpty()
    emailPersona: string;

    @Column()
    @IsInt({ message: 'Tiene que ser un valor entero' })
    @IsNotEmpty({ message: 'No tiene un telefono' })
    telefonoPersona: number;

    @OneToOne(() => Empleados, (empleados) => empleados.personas)
    empleados: Empleados;
}