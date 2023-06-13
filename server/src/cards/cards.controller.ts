import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UnauthorizedException } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Task } from 'src/tasks/entities/task.entity';
import { TasksService } from 'src/tasks/tasks.service';
import { JwtUser } from 'src/users/decorators/users.decorator';
import { User } from 'src/users/entities/user.entity';
import { Roles } from 'src/users/roles/roles.decorator';
import { Roles as Role } from 'src/users/roles/roles.enum';
import { RolesGuard } from 'src/users/roles/roles.guard';
import { UsersService } from 'src/users/users.service';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';

@Controller('sprints/:sprintId/cards')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CardsController {
    constructor(
        private readonly cardsService: CardsService,
        private readonly usersService: UsersService,
        private readonly tasksService: TasksService
    ) { }

    @Post()
    async create(@JwtUser() currentUser: User, @Body() createCardDto: CreateCardDto) {
        if (currentUser.role === Role.Viewer)
            throw new UnauthorizedException();

        const users = [];
        const tasks: Task[] = [];

        for (let i = 0; i < createCardDto.workers.length; i++) {
            const {password, ...user} = await this.usersService.findOne(createCardDto.workers[i].value);
            users.push(user);
        }
        createCardDto.workers = users;

        for (let i = 0; i < createCardDto.tasks.length; i++) {
            const task: Task = new Task();
            task.description = createCardDto.tasks[i].description;
            tasks.push(task);
        }
        createCardDto.tasks = tasks;

        return this.cardsService.create(createCardDto);
    }

    @Get()
    @Roles(Role.Viewer)
    async findAll(@Param('sprintId') sprintId: number) {
        const cards: Card[] = sprintId === undefined ? await this.cardsService.findBySprint(sprintId) : await this.cardsService.findAll();
        const users = [];

        for (const card of cards) {
            card.tasks = await this.tasksService.findByCard(card);
        }

        return cards;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cardsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
        return this.cardsService.update(+id, updateCardDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.cardsService.remove(+id);
    }
}
