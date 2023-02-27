import { Column, Entity } from "typeorm";
import { Entities } from "src/utilities/GenericEntities";

@Entity()
export class File extends Entities {
    @Column()
    originalName: string;

    @Column()
    filename: string;

    @Column()
    path: string;
}