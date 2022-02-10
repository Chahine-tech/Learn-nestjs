import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from 'src/users/users.service';
import * as jwt from 'jsonwebtoken';
import { request } from 'http';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
    constructor(private readonly usersService: UsersService) { }
    async use(req: Request, res: Response, next: NextFunction) {
        const { authorization } = req.headers;
        const payload = jwt.verify(authorization, 'secret');

        res.locals.user = await this.usersService.findOne(payload['id']);
        next();
    }
}