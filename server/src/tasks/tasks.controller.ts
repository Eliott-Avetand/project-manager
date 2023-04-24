import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { CardsService } from 'src/cards/cards.service';

@Controller('tasks')
export class TasksController {
    constructor(
        private readonly tasksService: TasksService,
        private readonly cardsService: CardsService
    ) { }

    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
        return this.tasksService.create(createTaskDto);
    }

    @Get()
    findAll() {
        return this.tasksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.tasksService.findOne(+id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
        this.tasksService.update(+id, updateTaskDto);

        const task: any = await this.tasksService.findOne(+id);
        const allTasks: any = task.__card__.tasks.filter((task: Task) => task.id !== +id);

        if (updateTaskDto.done && allTasks.every((task: Task) => task.done === true)) {
            this.cardsService.update(task.__card__.id, { done: true });
        } else
            this.cardsService.update(task.__card__.id, { done: false });
        return task;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.tasksService.remove(+id);
    }
}
