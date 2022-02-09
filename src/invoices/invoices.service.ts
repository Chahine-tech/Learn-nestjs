import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { PrismaService } from '../database/services/prisma.service';

@Injectable()
export class InvoicesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateInvoiceDto) {
    return this.prisma.invoice.create({
      data: {
        ...dto,
        User: { connect: { id: '781b697f-fed7-4ecc-bab7-58b9ef94c09a' } },
      },
    });
  }

  findAll() {
    return this.prisma.invoice.findMany();
  }

  findOne(id: number) {
    return this.prisma.invoice.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateInvoiceDto) {
    return this.prisma.invoice.update({
      where: { id },
      data: dto,
    });
  }

  delete(id: number) {
    return this.prisma.invoice.delete({ where: { id } });
  }
}