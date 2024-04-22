import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entity/project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create.project.dto';
import { UpdateProjectDto } from './dto/update.project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  create(createProjectDto: CreateProjectDto): Promise<Project> {
    const project: Project = new Project();
    project.clientName = createProjectDto.clientName;
    project.projectTitle = createProjectDto.projectTitle;
    project.projectDescription = createProjectDto.projectDescription;
    project.startDate = createProjectDto.startDate;
    project.endDate = createProjectDto.endDate;
    project.clientId = createProjectDto.clientId;
    return this.projectRepository.save(project);
  }

  findAll(): Promise<Project[]> {
    return this.projectRepository.find({
      relations:{
        client:true,
        resources:true,
      }
    });
  }

  async update(
    id: number,
    updateprojectDto: UpdateProjectDto,
  ): Promise<Project> {
    const existingClient = await this.projectRepository.findOneBy({ id });
    if (!existingClient) {
      throw new HttpException('Project Not Found', HttpStatus.NOT_FOUND);
    } else {
      const project: Project = new Project();
      project.id = id;
      project.clientName = updateprojectDto.clientName;
      project.projectTitle = updateprojectDto.projectTitle;
      project.projectDescription = updateprojectDto.projectDescription;
      project.startDate = updateprojectDto.startDate;
      project.endDate = updateprojectDto.endDate;
      project.clientId = updateprojectDto.clientId;
      return this.projectRepository.save(project);
    }
  }
}
