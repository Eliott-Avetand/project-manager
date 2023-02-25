import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { jwtConstants } from './constants';
import { UsersService } from 'src/users/users.service';
import Payload from './interfaces/payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usersService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([JwtStrategy.extractJWT, ExtractJwt.fromAuthHeaderAsBearerToken()]),
            secretOrKey: jwtConstants.secret,
        });
    }

    private static extractJWT(request: Request): string | null {
        if (request.cookies && request.cookies.token)
            return request.cookies.token;
        return null;
    }

    async validate(payload: Payload) {
        return this.usersService.findOne(payload.userId);
    }
}