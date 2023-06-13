import { Injectable } from '@nestjs/common';
import { CreateDeliverableDto } from './dto/create-deliverable.dto';
import { UpdateDeliverableDto } from './dto/update-deliverable.dto';
import { Deliverable } from './entities/deliverable.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DeliverablesService {
    constructor(@InjectRepository(Deliverable) private deliverable: Repository<Deliverable>) { };

    create(createDeliverableDto: CreateDeliverableDto) {
        this.deliverable.save(createDeliverableDto);
        return createDeliverableDto;
    }

    findAll() {
        return this.deliverable.find({ relations: { cards: true } })  
    }

    findOne(id: number): Promise<Deliverable> {
        return this.deliverable.findOneBy({ id });
    }

    update(id: number, updateDeliverableDto: UpdateDeliverableDto) {
        return `This action updates a #${id} deliverable`;
    }

    remove(id: number) {
        return `This action removes a #${id} deliverable`;
    }
}
