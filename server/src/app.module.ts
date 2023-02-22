import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SprintsModule } from './sprints/sprints.module';
import { CardsModule } from './cards/cards.module';
import { TasksModule } from './tasks/tasks.module';
import { User } from './users/entities/user.entity';
import { Sprint } from './sprints/entities/sprint.entity';
import { Card } from './cards/entities/card.entity';
import { Task } from './tasks/entities/task.entity';
import 'dotenv/config';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOST,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            entities: [User, Sprint, Card, Task],
            synchronize: process.env.ENV == 'development'
        }),
        UsersModule,
        AuthModule,
        SprintsModule,
        CardsModule,
        TasksModule
    ],
})

export class AppModule { }
