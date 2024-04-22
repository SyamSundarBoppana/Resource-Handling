import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateResourceDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  mainResourceName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  mainResourceID: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  shadowResourceName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  shadowResourceID: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  skills: string;
  
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  billingAmount: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  projectId: number;
}
