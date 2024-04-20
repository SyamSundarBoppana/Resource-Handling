import { ApiProperty } from '@nestjs/swagger';

export class CreateResourceDto {
  @ApiProperty()
  mainResourceName: string;

  @ApiProperty()
  mainResourceID: string;

  @ApiProperty()
  shadowResourceName: string;

  @ApiProperty()
  shadowResourceID: string;

  @ApiProperty()
  skills: string;
  
  @ApiProperty()
  billingAmount: string;

  @ApiProperty()
  projectId: number;
}
