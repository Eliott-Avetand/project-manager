import { Task } from "src/tasks/entities/task.entity";
import { User } from "src/users/entities/user.entity";

export class CreateCardDto {
    cardId: string;
    title: string;
    as: string;
    to: string;
    description: string;
    length: number;
    workers: User[];
    tasks: Task[];
}
