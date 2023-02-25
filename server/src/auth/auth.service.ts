import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import Payload from './interfaces/payload.interface';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);

        if (user && bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;

            return result;
        }
        return null;
    }

    async login(email: string, password: string) {
        let user: User = null;

        try {
            user = await this.validateUser(email, password);
        } catch (e) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
        if (!user || !user.email || !user.id)
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);

        const payload: Payload = { email: email, userId: user.id };
        const token = this.jwtService.sign(payload);

        return token;
    }
}
