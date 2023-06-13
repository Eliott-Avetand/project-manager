import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { File } from './entities/file.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileService {
    constructor(@InjectRepository(File) private file: Repository<File>) {}

    create(createFileDto: CreateFileDto) {
        return this.file.save({ ...createFileDto });
    }

    findOne(id: number): Promise<File | undefined> {
        return this.file.findOneBy({ id: id });
    }

    update(id: number, updateFileDto: UpdateFileDto): Promise<File> {
        return this.file.save({ ...updateFileDto, id: id });
    }

    remove(file: File) {
        try {
            if (fs.existsSync(`${file.path}/${file.filename}`))
                fs.unlinkSync(`${file.path}/${file.filename}`);
        } catch (err) {
            console.error(err);
        }
        return this.file.delete(file.id);
    }

    move(oldPath: string, newPath: string): boolean {
        fs.mkdirSync(path.dirname(newPath), { recursive: true });
        fs.rename(oldPath, newPath, (err) => {
            if (err) return false;
        });
        return true;
    }

    // async uploadToPath(file: Photo, nextPath): Promise<Photo> {
    //     if (!file || file === undefined)
    //         return undefined;
        
    //     const newFile = await this.create({
    //         path: nextPath
    //     })
    //     return;
    // }
}
