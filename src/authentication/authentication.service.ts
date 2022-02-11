import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CredentialsDto } from './dto/credentials.dto';
import { PrismaService } from '../database/services/prisma.service';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthenticationService {
  constructor(private readonly prisma: PrismaService) { }
  create(credentialsDto: CredentialsDto) {
    return this.prisma.user.create({ data: credentialsDto });
  }

  async login(credentialsDto: CredentialsDto) {
    const { email, id, password } = await this.prisma.user.findUnique({ where: {email: credentialsDto.email} });
    if (credentialsDto.password!== password) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    return { token: jwt.sign({ id }, 'secret'), user: { email, id } };
  }

  register(credentialsDto: CredentialsDto) {
    return this.prisma.user.create({data: credentialsDto});
  }

}