import { Injectable } from '@nestjs/common';
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
    const {email,id} = await this.prisma.user.findFirst({ where: credentialsDto});
    return { token: jwt.sign({ id }, 'secret'), user: { email, id}}
  }

  findOne(id: number) {
    return `This action returns a #${id} authentication`;
  }

  remove(id: number) {
    return `This action removes a #${id} authentication`;
  }
}
