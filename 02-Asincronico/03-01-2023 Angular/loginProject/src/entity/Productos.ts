import { IsInt, IsNotEmpty, IsPositive, IsString, MaxLength } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Categorias } from "./Categorias";

@Entity()
export class Productos {
    // se agregan las columnas y sus propiedades de la tabla
    @PrimaryColumn()
    @IsInt({ message: 'El ID debe ser entero' })
    @IsPositive({ message: 'El ID debe de ser mayor que 0' })
    @IsNotEmpty({ message: 'se requiere ID' })
    id: number

    @Column()
    @MaxLength(50, { message: 'El nombre debe de ser menor a 50 caracteres' })
    @IsString({ message: 'El nombre debe de ser en caracter' })
    @IsNotEmpty({ message: 'se requiere Nombre' })
    nombre: String

    // @Column()
    // @IsInt({ message: 'tiene que ser un valor numerico' })
    // @IsNotEmpty({ message: 'se requiere categoria' })
    // idCategoria: number

    @Column()
    @IsNotEmpty({ message: 'se requiere precio' })
    @IsPositive({ message: 'tienen que ser mayor que 0' })
    @IsInt()
    precio: number

    @Column({ default: true })
    estado: boolean

    @ManyToOne(() => Categorias, (categoria) => categoria.productos)
    categoria: Categorias;

}