import { Exclude } from "class-transformer";
import { File } from "src/Files/entities/file.entity";
import { Entities } from "src/utilities/GenericEntities";
import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { Roles } from "../roles/roles.enum";

@Entity()
export class User extends Entities {
    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    title: string;

    @Column({ default: Roles.User })
    role: Roles;

    @Column()
    @Exclude()
    password: string;

    @OneToOne(() => File, { eager: true, onDelete: 'SET NULL' })
    @JoinColumn()
    picture: File;
}
