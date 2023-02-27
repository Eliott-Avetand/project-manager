import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { File } from 'src/Files/entities/file.entity';
import { FileService } from 'src/Files/files.service';

@Module({
    imports: [TypeOrmModule.forFeature([User, File])],
    controllers: [UsersController],
    providers: [UsersService, FileService],
    exports: [UsersService]
})

export class UsersModule { }
