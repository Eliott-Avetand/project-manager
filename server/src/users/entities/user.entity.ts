import { Entities } from "src/utilities/GenericEntities";
import { Entity, Column } from "typeorm";

@Entity()
export class User extends Entities {
    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;
}
