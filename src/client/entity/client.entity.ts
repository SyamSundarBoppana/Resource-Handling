import { Project } from 'src/project/entity/project.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientName: string;

  @Column()
  clientLocation: string;

  @Column()
  onBoardingYear: string;

  @Column({default:""})
  clientLogo: string;

  @Column({default:"Active"})
  Status:string;

  @OneToMany(() => Project, (project) => project.client)
    projects: Project[]
}
