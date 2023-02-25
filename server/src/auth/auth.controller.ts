import { Controller, Request, Post, UseGuards, Get, Body, Res, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { AuthDto } from './dto/auth.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UsersService
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() authDto: AuthDto, @Res() response: Response) {
        const email = authDto.email;
        const password = authDto.password;

        if (!email || !password)
            throw new HttpException('Wrong email or password', HttpStatus.BAD_REQUEST);
        
        const token = await this.authService.login(email, password);
        const user: User = await this.userService.findByEmail(email);
        const data = { email: user.email, id: user.id, username: user.username };
        const expiresTime = new Date();

        expiresTime.setDate(expiresTime.getDate() + 1);
        response.cookie('token', token, { expires: expiresTime });
        return response.send(data);
    }

    @Post('logout')
    async logout(@Res() response: Response) {
        response.cookie('token', '', { expires: new Date() });
        return response.send();
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() request) {
        return request.body;
    }
}