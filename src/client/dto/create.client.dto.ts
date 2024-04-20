import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty()
  clientName: string;

  @ApiProperty()
  clientLocation: string;

  @ApiProperty()
  onBoardingYear: string;
}
