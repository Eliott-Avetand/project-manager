import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ConflictException, BadRequestException, UnauthorizedException, NotFoundException, UseInterceptors, UploadedFile, StreamableFile, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from './roles/roles.guard';
import { Roles } from './roles/roles.decorator';
import { Roles as Role } from './roles/roles.enum';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from 'src/auth/constants';
import { JwtUser } from './decorators/users.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { File } from 'src/Files/entities/file.entity';
import { FileService } from 'src/Files/files.service';
import { createReadStream } from 'fs';
import { Response } from 'express';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly fileService: FileService
    ) { }

    generatePassword(length: number): string {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/*-+@(){}[]:;!%';

        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    @Post()
    @Roles(Role.Admin)
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        let user: User = await this.usersService.findByEmail(createUserDto.email);

        if (user)
            throw new ConflictException('User already exist');
        if (Object.values(createUserDto).some(data => data === undefined))
            throw new BadRequestException('All fields must not be empty.');

        const hash: string = await bcrypt.hash(this.generatePassword(12), jwtConstants.saltOrRounds);
        const newUser: User = new User();

        newUser.username = createUserDto.username;
        newUser.email = createUserDto.email;
        newUser.title = createUserDto.title;
        newUser.password = hash;
        
        return this.usersService.create(newUser);
    }

    @Post('/:id/picture')
    @Roles(Role.User)
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({ destination: './tmp' }),
            limits: {
                fieldNameSize: 300,
                fileSize: 20000000 // 20 mb in bytes
            }
        })
    )
    async uploadPicture(@UploadedFile() file: Express.Multer.File, @JwtUser() currentUser: User, @Param('id') id: number) {
        if ((currentUser.role === Role.User || currentUser.role === Role.Viewer) && +id !== currentUser.id)
            throw new UnauthorizedException();
        const user: User = await this.usersService.findOne(+id);
        let newFile = null;

        if (!user)
            throw new ConflictException('User already exist');
        if (file) {
            const newPath = `./files/users/${user.id}/picture`;

            if (!file || file.originalname === undefined || file.filename === undefined)
                throw new BadRequestException('File not found.');
            newFile = await this.fileService.create({
                path: newPath,
                originalName: file.originalname,
                filename: file.filename
            });
            this.fileService.move(`./tmp/${file.filename}`, `${newPath}/${file.filename}`);
        }
        user.picture = newFile;

        return this.usersService.create(user);
    }

    @Get(':id/picture')
    @Roles(Role.User)
    async getPicture(@JwtUser() currentUser: User, @Param('id') id: number): Promise<StreamableFile> {
        if ((currentUser.role === Role.User || currentUser.role === Role.Viewer) && +id !== currentUser.id)
            throw new UnauthorizedException();

        const user: User = await this.usersService.findOne(+id);
        

        if (!user)
            throw new ConflictException('User already exist');
        
        const file = createReadStream(`${user.picture.path}/${user.picture.filename}`);
        
        return new StreamableFile(file);
    }

    @Get()
    @Roles(Role.Viewer)
    async findAll() {
        const users: any[] = await this.usersService.findAll();

        users.forEach(user => {
            user.profile = new StreamableFile(createReadStream(`${user.picture.path}/${user.picture.filename}`));
        })
        
        return users;
    }

    @Get(':id')
    @Roles(Role.Viewer)
    async findOne(@Param('id') id: string, @JwtUser() currentUser: User): Promise<User> {
        if ((currentUser.role === Role.User || currentUser.role === Role.Viewer) && +id !== currentUser.id)
            throw new UnauthorizedException();
        
        const user: User = await this.usersService.findOne(+id);

        if (user === undefined)
            throw new NotFoundException('User not found.');
        return user;
    }

    @Patch(':id')
    @Roles(Role.User)
    async update(@Param('id') id: string, @JwtUser() currentUser: User, @Body() updateUserDto: UpdateUserDto) {
        if (currentUser.role === Role.User && +id !== currentUser.id)
            throw new UnauthorizedException();
        
        const user: User = await this.usersService.findOne(+id);

        if (user === undefined)
            throw new NotFoundException('User not found.');
        if (currentUser.role === Role.User) {
            const { role } = updateUserDto;

            if (role != currentUser.role)
                throw new UnauthorizedException();
        }
        if (updateUserDto.password)
            updateUserDto.password = bcrypt.hash(updateUserDto.password, jwtConstants.saltOrRounds);
        return this.usersService.update(+id, updateUserDto);
    }

    @Delete(':id')
    @Roles(Role.User)
    async remove(@Param('id') id: string, @JwtUser() currentUser: User) {
        if (currentUser.role === Role.User && +id !== currentUser.id)
            throw new UnauthorizedException();
        
        const user: User = await this.usersService.findOne(+id);

        if (user === undefined)
            throw new NotFoundException('User not found.');
        return this.usersService.remove(+id);
    }
}
