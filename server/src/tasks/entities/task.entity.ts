import { Card } from "src/cards/entities/card.entity";
import { Entities } from "src/utilities/GenericEntities";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Task extends Entities {
    @Column()
    description: string;

    @Column({ default: false })
    done: boolean;

    @ManyToOne(() => Card, card => card.tasks, { lazy: true, onDelete: 'CASCADE' })
    card: Card;
}
