import { Card } from "src/cards/entities/card.entity";
import { Entities } from "src/utilities/GenericEntities";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Task extends Entities {
    @Column()
    description: string;

    @Column()
    done: boolean;

    @ManyToOne(() => Card, (card) => card.tasks, {
        onDelete: "CASCADE"
    })
    @JoinColumn()
    card: number;
}
