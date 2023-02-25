import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Controller('sprints/:sprintId/cards')
export class CardsController {
    constructor(private readonly cardsService: CardsService) { }

    @Post()
    create(@Param(':sprintId') sprintId: string, @Body() createCardDto: CreateCardDto) {
        return this.cardsService.create(createCardDto, +sprintId);
    }

    @Get(':id')
    findAll(@Param('id') id: string) {
        return this.cardsService.findAll(+id);
    }

    @Get(':sprintId/cards/:cardId')
    findOne(@Param('sprintId') sprintId: string, @Param('cardId') cardId: string) {
        return this.cardsService.findOne(+cardId);
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
