import { Module } from '@nestjs/common';
import { DeliverablesService } from './deliverables.service';
import { DeliverablesController } from './deliverables.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deliverable } from './entities/deliverable.entity';
import { Card } from 'src/cards/entities/card.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Deliverable, Card])],
    controllers: [DeliverablesController],
    providers: [DeliverablesService]
})
export class DeliverablesModule {}
