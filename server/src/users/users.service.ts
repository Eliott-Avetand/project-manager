import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private user: Repository<User>) {}

    create(createUserDto: CreateUserDto) {
        this.user.save(createUserDto);
    }

    findAll(): Promise<User[]> {
        return this.user.find();
    }

    async findOne(email: string): Promise<User | undefined> {
        return this.user.findOneBy({ email });
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        this.user.update(id, updateUserDto);
    }

    async remove(id: number) {
        await this.user.delete(id);
    }
}
