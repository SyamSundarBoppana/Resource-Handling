import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty()
  employeeName: string;

  @ApiProperty()
  employeeType: string;

  @ApiProperty()
  employeeId: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  yearsOfExp: string;

  @ApiProperty()
  skills: string;

  @ApiProperty()
  team: string;

  @ApiProperty()
  designation: string;

  @ApiProperty()
  reportingPerson: string;
}
