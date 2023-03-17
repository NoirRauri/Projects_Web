import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    // se agregan las columnas y sus propiedades de la tabla
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
