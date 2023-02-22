import { Sprint } from "src/sprints/entities/sprint.entity";
import { Task } from "src/tasks/entities/task.entity";
import { User } from "src/users/entities/user.entity";
import { Entities } from "src/utilities/GenericEntities";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Card extends Entities {
    @Column()
    cardName: string;

    @Column()
    title: string;

    @Column()
    as: string;

    @Column()
    to: string;

    @Column()
    description: string;

    @Column()
    length: number;

    @ManyToMany(() => User)
    workers: User[];

    @OneToMany(() => Task, (task) => task.card, {
    })
    tasks: Task[];
    
    @ManyToOne(() => Sprint, (sprint) => sprint.cards, {
        onDelete: "CASCADE"
    })
    @JoinColumn()
    sprint: number;
}
