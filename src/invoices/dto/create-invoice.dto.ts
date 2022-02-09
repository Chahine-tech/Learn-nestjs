import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateInvoiceDto {
  @IsNotEmpty()
  @IsString()
  client: string;

  @IsNotEmpty()
  @IsNumber()
  total: number;
}