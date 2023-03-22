import { IsBoolean, IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Productos } from "./Productos";

@Entity()
export class Categorias {
    @PrimaryGeneratedColumn()
    @IsInt({ message: 'Tiene que ser un valor entero' })
    @IsNotEmpty({ message: 'No tiene un ID' })
    id: number;

    @Column()
    @MaxLength(50, { message: 'El nombre tiene mas de 50 categorias' })
    @IsString({ message: 'Tiene que ser un valor de caracter' })
    @IsNotEmpty({ message: 'No tiene un nombre' })
    nombre: string;

    @Column({ default: true })
    estado: boolean;

    @OneToMany(() => Productos, (prod) => prod.categoria)
    productos: Productos[];
}