import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from './entities/file.entity';
import { FileService } from './files.service';

@Module({
    imports: [TypeOrmModule.forFeature([File])],
    providers: [FileService]
})

export class PhotoModule { }
