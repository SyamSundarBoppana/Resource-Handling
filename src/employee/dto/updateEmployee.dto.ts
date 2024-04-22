import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  employeeName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  employeeType: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  employeeId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  location: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  yearsOfExp: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  skills: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  team: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  designation: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  reportingPerson: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  mainSourceProjects: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  shadowSourceProjects: string;
}
