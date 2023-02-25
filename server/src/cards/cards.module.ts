import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { Sprint } from 'src/sprints/entities/sprint.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Card]), TypeOrmModule.forFeature([Sprint])],
    controllers: [CardsController],
    providers: [CardsService]
})
export class CardsModule { }
