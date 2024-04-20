import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmployeeDto {
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

  @ApiProperty()
  mainSourceProjects: string;

  @ApiProperty()
  shadowSourceProjects: string;
}
