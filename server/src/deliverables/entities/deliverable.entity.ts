import { Card } from "src/cards/entities/card.entity";
import { Entities } from "src/utilities/GenericEntities";
import { Column, Entity, JoinColumn, OneToMany } from "typeorm";

@Entity()
export class Deliverable extends Entities {
    @Column()
    name: string;

    @OneToMany(() => Card, card => card.deliverable, { onDelete: 'CASCADE' })
    @JoinColumn()
    cards: Card[];
}
