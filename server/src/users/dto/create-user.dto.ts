import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
    @IsString()
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    title: string;

    @IsString()
    password: string;
}
