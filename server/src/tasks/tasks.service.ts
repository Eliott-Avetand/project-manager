import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from 'src/cards/entities/card.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
    constructor(@InjectRepository(Task) private task: Repository<Task>) { };

    create(createTaskDto: CreateTaskDto) {
        this.task.save(createTaskDto);
        return createTaskDto;
    }

    findAll() {
        return `This action returns all tasks`;
    }

    findOne(id: number) {
        return `This action returns a #${id} task`;
    }

    findByCard(card: Card): Promise<Task[]> {
        return this.task.find({ relations: { card: true }, where: { card: { id: card.id } } });
    }

    update(id: number, updateTaskDto: UpdateTaskDto) {
        return `This action updates a #${id} task`;
    }

    remove(id: number) {
        return `This action removes a #${id} task`;
    }
}
