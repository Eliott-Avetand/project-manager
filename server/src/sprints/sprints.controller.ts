import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, NotFoundException } from '@nestjs/common';
import { SprintsService } from './sprints.service';
import { CreateSprintDto } from './dto/create-sprint.dto';
import { UpdateSprintDto } from './dto/update-sprint.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Sprint } from './entities/sprint.entity';
import { Card } from 'src/cards/entities/card.entity';
import { CardsService } from 'src/cards/cards.service';

@Controller('sprints')
@UseGuards(JwtAuthGuard)
export class SprintsController {
    constructor(
        private readonly sprintsService: SprintsService,
        private readonly cardsService: CardsService
    ) { }

    @Post()
    create(@Body() createSprintDto: CreateSprintDto) {
        return this.sprintsService.create(createSprintDto);
    }

    @Get()
    findAll() {
        return this.sprintsService.findAll();
    }

    @Get('/current')
    async getCurrent(): Promise<Sprint> {
        const sprints: Sprint[] = await this.sprintsService.findAll();
        const today: number = new Date().getTime();
        let sprint: Sprint = null;

        for (let i = 0; sprints[i]; i++) {
            if (new Date(sprints[i].startDate).getTime() <= today && new Date(sprints[i].endDate).getTime() >= today)
                sprint = sprints[i];
        }
        if (!sprint)
            throw new NotFoundException('There is no current sprint.');
        sprint.cards = await this.cardsService.findBySprint(sprint.id);
        return sprint;
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.sprintsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateSprintDto: UpdateSprintDto) {
        return this.sprintsService.update(+id, updateSprintDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.sprintsService.remove(+id);
    }
}
