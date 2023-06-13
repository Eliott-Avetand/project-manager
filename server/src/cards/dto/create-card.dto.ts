import { Task } from "src/tasks/entities/task.entity";

export class CreateCardDto {
    cardId: string;
    deliverableId: number;
    title: string;
    as: string;
    to: string;
    description: string;
    startDate: Date;
    endDate: Date;
    length: number;
    workers: any[];
    tasks: Task[];
    sprintId: number;
}
