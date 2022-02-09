import { Injectable } from '@nestjs/common';
import { CreateEstimateDto } from './dto/create-estimate.dto';
import { UpdateEstimateDto } from './dto/update-estimate.dto';
import { PrismaService } from '../database/services/prisma.service';

@Injectable()
export class EstimatesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createEstimateDto: CreateEstimateDto) {
    return this.prisma.estimate.create({ data: { ...createEstimateDto, User: { connect: { id: '781b697f-fed7-4ecc-bab7-58b9ef94c09a' } } } });
  }

  findAll() {
    return this.prisma.estimate.findMany();
  }

  findOne(id: number) {
    return this.prisma.estimate.findUnique({where: {id}});
  }

  update(id: number, updateEstimateDto: UpdateEstimateDto) {
    return this.prisma.estimate.update({
      where: { id },
      data: updateEstimateDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} estimate`;
  }
}
