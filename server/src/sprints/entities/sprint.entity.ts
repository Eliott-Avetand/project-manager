import { Card } from "src/cards/entities/card.entity";
import { Entities } from "src/utilities/GenericEntities";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Sprint extends Entities {
    @Column()
    title: string;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @OneToMany(() => Card, card => card.sprint)
    cards: Card[]
}
