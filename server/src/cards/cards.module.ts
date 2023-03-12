import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { TasksService } from 'src/tasks/tasks.service';

@Module({
    imports: [TypeOrmModule.forFeature([Card, User, Task])],
    controllers: [CardsController],
    providers: [CardsService, UsersService, TasksService]
})
export class CardsModule { }
