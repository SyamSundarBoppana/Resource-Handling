import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  clientName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  clientLocation: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  onBoardingYear: string;
}
