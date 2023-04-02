import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator"
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Personas } from "./Personas"
import { Puestos } from "./Puestos"

@Entity()
export class Empleados {
    // se agregan las columnas y sus propiedades de la tabla
    @PrimaryGeneratedColumn()
    @IsInt({ message: 'Tiene que ser un valor entero' })
    @IsNotEmpty({ message: 'No tiene un valor' })
    idEmpleado: number

    @Column()
    @IsString({ message: 'Tiene que ser un valor de caracter' })
    @IsEmail(undefined, { message: "Empleado@Empleado.com" })
    @IsNotEmpty({ message: 'No tiene un valor' })
    emailEmpleado: String

    @Column()
    @IsInt({ message: 'Tiene que ser un valor entero' })
    @IsNotEmpty({ message: 'No tiene un telefono' })
    telefonoEmpleado: number;

    @Column({ default: true })
    estado: boolean

    @OneToOne(() => Personas, { cascade: ['insert', 'update'] })
    @JoinColumn({ name: "idPersona" })
    personas: Personas;

    @ManyToOne(() => Puestos, (puestos) => puestos.empleados)
    puestos: Puestos;

}