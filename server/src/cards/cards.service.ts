import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sprint } from 'src/sprints/entities/sprint.entity';
import { Repository } from 'typeorm';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';

@Injectable()
export class CardsService {
    constructor(
        @InjectRepository(Card) private card: Repository<Card>,
        @InjectRepository(Sprint) private sprint: Repository<Sprint>
    ) {};

    async create(createCardDto: CreateCardDto, sprintId: number) {
        let sprint: Sprint = await this.sprint.findOneBy({ id: sprintId });
        let card: Card = await this.card.save(createCardDto);
        
        sprint.cards.push(card);
        await this.sprint.save(card);
    }

    findAll(sprintId: number): Promise<Card[]> {
        return this.card.findBy({ sprint: sprintId });
    }

    findOne(id: number) {
        return `This action returns a #${id} card`;
    }

    update(id: number, updateCardDto: UpdateCardDto) {
        return `This action updates a #${id} card`;
    }

    remove(id: number) {
        return `This action removes a #${id} card`;
    }
}
