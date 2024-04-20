import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeName: string;

  @Column()
  employeeType: string;

  @Column()
  employeeId: string;

  @Column()
  location: string;

  @Column()
  yearsOfExp: string;

  @Column()
  skills: string;

  @Column()
  team: string;

  @Column()
  designation: string;

  @Column()
  reportingPerson: string;

  @Column({default:""})
  mainSourceProjects: string;

  @Column({default:""})
  shadowSourceProjects: string;
}
