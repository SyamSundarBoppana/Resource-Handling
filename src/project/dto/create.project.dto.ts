import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty()
  clientName: string;

  @ApiProperty()
  projectTitle: string;

  @ApiProperty()
  projectDescription: string;

  @ApiProperty()
  startDate: string;

  @ApiProperty()
  endDate: string;

  @ApiProperty()
  clientId: number;
}
