import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  clientName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  projectTitle: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  projectDescription: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  startDate: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  endDate: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  clientId: number;
}
