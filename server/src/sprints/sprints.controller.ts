import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SprintsService } from './sprints.service';
import { CreateSprintDto } from './dto/create-sprint.dto';
import { UpdateSprintDto } from './dto/update-sprint.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('sprints')
export class SprintsController {
    constructor(private readonly sprintsService: SprintsService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createSprintDto: CreateSprintDto) {
        return this.sprintsService.create(createSprintDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.sprintsService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.sprintsService.findOne(+id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateSprintDto: UpdateSprintDto) {
        return this.sprintsService.update(+id, updateSprintDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.sprintsService.remove(+id);
    }
}
