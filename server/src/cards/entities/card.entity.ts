import { Deliverable } from "src/deliverables/entities/deliverable.entity";
import { Sprint } from "src/sprints/entities/sprint.entity";
import { Task } from "src/tasks/entities/task.entity";
import { User } from "src/users/entities/user.entity";
import { Entities } from "src/utilities/GenericEntities";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Card extends Entities {
    @Column()
    cardName: string;

    @ManyToOne(() => Deliverable, deliverable => deliverable.cards, { onDelete: "CASCADE" })
    @JoinColumn()
    deliverable: Deliverable;

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

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column({ default: false })
    done: boolean;

    @ManyToMany(() => User, { eager: true, cascade: true })
    @JoinTable()
    workers: User[];

    @OneToMany(() => Task, task => task.card, { eager: true, cascade: true, onDelete: 'CASCADE' })
    @JoinColumn()
    tasks: Task[];
    
    @ManyToOne(() => Sprint, sprint => sprint.cards, { onDelete: "CASCADE" })
    @JoinColumn()
    sprint: Sprint;
}
