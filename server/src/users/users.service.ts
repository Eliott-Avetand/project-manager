import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private user: Repository<User>) {}

    create(user: User) {
        return this.user.save(user);
    }

    findAll(): Promise<User[]> {
        return this.user.find();
    }

    findOne(id: number): Promise<User | undefined> {
        return this.user.findOneBy({ id });
    }

    findByEmail(email: string): Promise<User | undefined> {
        return this.user.findOneBy({ email });
    }

    update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        return this.user.save({ ...updateUserDto, id: id });
    }

    remove(id: number) {
        return this.user.delete(id);
    }
}
