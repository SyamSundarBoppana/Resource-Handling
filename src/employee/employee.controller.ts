import { Body, Controller, Get, Patch, Post, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { ApiTags } from '@nestjs/swagger';
import { Employee } from './entity/employee.entity';
import { CreateEmployeeDto } from './dto/createEmployee.dto';
import { UpdateEmployeeDto } from './dto/updateEmployee.dto';

@ApiTags('Employee')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  createEmployee(
    @Body() createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  findAllEmployees(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Patch(':id')
  updateEmployee(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }
}
