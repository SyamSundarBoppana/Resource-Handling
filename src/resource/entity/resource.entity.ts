import { Project } from 'src/project/entity/project.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Resource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mainResourceName: string;

  @Column()
  mainResourceId: string;

  @Column()
  shadowResourceName: string;

  @Column()
  shadowResourceId: string;

  @Column()
  skills: string;

  @Column()
  billingAmount: string;

  @Column({name:'project_id'})
  projectId: number;

  @ManyToOne(() => Project, (project) => project.resources)
  @JoinColumn({name:'project_id'})
  project: Project;
}
