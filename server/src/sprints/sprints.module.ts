import { Module } from '@nestjs/common';
import { SprintsService } from './sprints.service';
import { SprintsController } from './sprints.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sprint } from './entities/sprint.entity';
import { CardsService } from 'src/cards/cards.service';
import { Card } from 'src/cards/entities/card.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Sprint, Card])],
    controllers: [SprintsController],
    providers: [SprintsService, CardsService]
})
export class SprintsModule { }
