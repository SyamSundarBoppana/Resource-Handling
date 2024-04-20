import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entity/employee.entity';
import { CreateEmployeeDto } from './dto/createEmployee.dto';
import { UpdateEmployeeDto } from './dto/updateEmployee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const employee: Employee = new Employee();
    employee.employeeName = createEmployeeDto.employeeName;
    employee.employeeType = createEmployeeDto.employeeType;
    employee.employeeId = createEmployeeDto.employeeId;
    employee.location = createEmployeeDto.location;
    employee.yearsOfExp = createEmployeeDto.yearsOfExp;
    employee.skills = createEmployeeDto.skills;
    employee.team = createEmployeeDto.team;
    employee.designation = createEmployeeDto.designation;
    employee.reportingPerson = createEmployeeDto.reportingPerson;
    return this.employeeRepository.save(employee);
  }

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async update(
    id: number,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    const existingEmployee = await this.employeeRepository.findOneBy({ id });
    if (!existingEmployee) {
      throw new HttpException('Employee Not Found', HttpStatus.NOT_FOUND);
    } else {
      const employee: Employee = new Employee();
      employee.id = id;
      employee.employeeName = updateEmployeeDto.employeeName;
      employee.employeeType = updateEmployeeDto.employeeType;
      employee.employeeId = updateEmployeeDto.employeeId;
      employee.location = updateEmployeeDto.location;
      employee.yearsOfExp = updateEmployeeDto.yearsOfExp;
      employee.skills = updateEmployeeDto.skills;
      employee.team = updateEmployeeDto.team;
      employee.designation = updateEmployeeDto.designation;
      employee.reportingPerson = updateEmployeeDto.reportingPerson;
      employee.mainSourceProjects = updateEmployeeDto.mainSourceProjects;
      employee.shadowSourceProjects = updateEmployeeDto.shadowSourceProjects;
      return this.employeeRepository.save(employee);
    }
  }
}
