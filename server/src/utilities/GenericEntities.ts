import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Entities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    created_at: Date;

    @Column()
    modified_at: Date;
}
