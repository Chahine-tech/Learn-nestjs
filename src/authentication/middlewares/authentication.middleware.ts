import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from 'src/users/users.service';
import * as jwt from 'jsonwebtoken';
import { request } from 'http';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
    constructor(private readonly usersService: UsersService) { }
    async use(req, res: Response, next: NextFunction) {
        const { authorization } = req.headers;
        try {
            const payload = jwt.verify(authorization, 'secret');
            if (!payload) {
                throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
            }
            req.user = await this.usersService.findOne(payload['id']);

            next();
        } catch (_error) {
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        }
    }
}