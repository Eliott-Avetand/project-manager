import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';

@Injectable()
export class CardsService {
    constructor(@InjectRepository(Card) private card: Repository<Card>) { };

    create(createCardDto: CreateCardDto) {
        this.card.save(createCardDto);
        return createCardDto;
    }

    findAll(): Promise<Card[]> {
        return this.card.find({ relations: { deliverable: true } });
    }

    findBySprint(sprintId: number): Promise<Card[]> {
        return this.card.find({ relations: { sprint: true, workers: true, deliverable: true }, where: { sprint: { id: sprintId } } })  
    }

    findOne(id: number) {
        return `This action returns a #${id} card`;
    }

    update(id: number, updateCardDto: UpdateCardDto) {
        this.card.update(id, updateCardDto);
        return updateCardDto;
    }

    remove(id: number) {
        this.card.delete(id);
    }
}
