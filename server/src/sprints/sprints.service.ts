import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSprintDto } from './dto/create-sprint.dto';
import { UpdateSprintDto } from './dto/update-sprint.dto';
import { Sprint } from './entities/sprint.entity';

@Injectable()
export class SprintsService {
    constructor(@InjectRepository(Sprint) private sprint: Repository<Sprint>) { };

    create(createSprintDto: CreateSprintDto) {
        this.sprint.save(createSprintDto);
        return createSprintDto;
    }

    findAll(): Promise<Sprint[]> {
        return this.sprint.find();
    }

    async findOne(id: number): Promise<Sprint | undefined> {
        return this.sprint.findOneBy({ id });
    }

    update(id: number, updateSprintDto: UpdateSprintDto) {
        this.sprint.update(id, updateSprintDto);
        return updateSprintDto;
    }

    async remove(id: number) {
        await this.sprint.delete(id);
    }
}
