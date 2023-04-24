import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { CardsService } from 'src/cards/cards.service';
import { Card } from 'src/cards/entities/card.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Task, Card])],
    controllers: [TasksController],
    providers: [TasksService, CardsService]
})
export class TasksModule { }

